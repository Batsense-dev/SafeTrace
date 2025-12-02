import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screen/Home";
import Rules from "./screen/Rules"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";
import { i18n,changeLanguage } from "./lib/i18n";


export default function App() {
  const Tabs = createBottomTabNavigator();
  const home = i18n.t('home');
  const rules = i18n.t('rules_privacy');
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === home) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === rules) {
              iconName = focused ? 'receipt' : 'receipt-outline';
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
      > 
        <Tabs.Screen name={home} component={Home} />
        <Tabs.Screen name={rules} component={Rules} />
      </Tabs.Navigator>
    </NavigationContainer>
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
