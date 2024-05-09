import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';



function MyTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' detachInactiveScreens={false} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
     
    </Tab.Navigator>
  );
}

export default MyTabs;