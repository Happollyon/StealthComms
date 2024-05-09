import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MyTabs from './screens/Mytabs';
import Test from './screens/Test';






function index() {
  const Stack = createNativeStackNavigator();
  return (

      <Stack.Navigator initialRouteName="Test">
       
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
 
  );
}
export default index;