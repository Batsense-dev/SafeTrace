import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  let latitude = null;
  let longitude = null;
  let altitude = null;

async function getUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  }
  useEffect(() => {
    getUserLocation();
  }, []);
  async function onShare() {
    try {
      const result = await Share.share({
        message: `Au secour ! J'ai des problèmes je me trouve à la posistion indiqué par le lien ci-dessous: cliquez dessus pour ouvrir Google Maps.
        \nLatitude: ${latitude}, 
        \nLongitude: ${longitude}, 
        \nAltitude: ${altitude}
        \nhttps://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`,
      });
    } catch (error) {
      alert(error.message);
    }
  }
  let text = 'Cliquer sur le bouton pour obtenir la position';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    altitude = location.coords.altitude;
    text = `Latitude: ${latitude}\nLongitude: ${longitude}\nAltitude: ${altitude}`;
  } 

  return (
    <View style={styles.container}>
      <Button onPress={getUserLocation} title="Obtenir ma position" />  
      <Text style={styles.text}>{text}</Text>
      <Button onPress={onShare} title="Partager ma position" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop:100,
    marginBottom:100,
    fontSize:20,
  }
});
