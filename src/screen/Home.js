import React from 'react';
import { StyleSheet, Text, View, Button, Share } from 'react-native';
import * as Location from 'expo-location';
import { i18n } from '../lib/i18n';


export default function Home() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  let latitude = null;
  let longitude = null;
  let altitude = null;

async function getUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg(i18n.t('permission_denied'));
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  }
  async function onShare() {
    try {
      const result = await Share.share({
        message: `${i18n.t('help_text')}
        \nLatitude: ${latitude}, 
        \nLongitude: ${longitude}, 
        \nAltitude: ${altitude}
        \nhttps://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`,
      });
    } catch (error) {
      alert(error.message);
    }
  }
  let text = i18n.t('click_get_position');
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
      <Button onPress={getUserLocation} title={i18n.t('get_position')} />  
      <Text style={styles.text}>{text}</Text>
      <Button onPress={onShare} title={i18n.t('share_location')} />
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