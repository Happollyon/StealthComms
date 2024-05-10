import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTabs from './screens/Mytabs';
import LoginOrRegister from './screens/LoginOrRegister';


function index() {
  const Stack = createNativeStackNavigator();
  return (

      <Stack.Navigator initialRouteName="LoginOrRegister">
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} options={{ headerShown: false }}/>
      </Stack.Navigator>
 
  );
}
export default index;