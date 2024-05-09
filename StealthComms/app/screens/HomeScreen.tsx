import { Text, View,TouchableOpacity } from "react-native";
import React from "react";
import {Button, Searchbar} from 'react-native-paper';

export default function HomeScreen() {
  return (
    
      <View>
           <Text>HomeScreen</Text>
            <Searchbar placeholder="Find Users" style={{ width: '80%', marginBottom: 10 }} />
          <TouchableOpacity>
            <Button icon="login" mode="contained" loading={true} style={{ width: '80%' }}>
              Login
            </Button>
            </TouchableOpacity>
      </View>
      
  
  );
}