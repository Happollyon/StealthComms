import React from "react";
import {  View,TouchableOpacity } from "react-native";
import { Button,Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


function LoginOrRegister() {
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: "#fff",flex:1,display:'flex', flexDirection:'column',alignItems:'center'}}>
            <Text variant="displaySmall" style={{color:'"rgb(120, 69, 172)'}}>
            Welcome to
            </Text >
            <Text variant="displaySmall" style={{color:'"rgb(120, 69, 172)'}}>
            StealthComms
            </Text>
            <Text variant="displaySmall" style={{color:'"rgb(120, 69, 172)'}}>
            Where Your Privacy
            </Text>
            <Text variant="displaySmall" style={{color:'"rgb(120, 69, 172)'}}>
            Comes First!
            </Text>
            <Text variant="titleMedium" style={{color:'"rgb(120, 69, 172)'}}>
            Your messages are encrypted end-to-end
            </Text>
            <Text variant="titleMedium" style={{color:'"rgb(120, 69, 172)'}}>
            ,ensuring your conversations
            </Text>
            <Text variant="titleMedium" style={{color:'"rgb(120, 69, 172)'}}>
            remain yours and yours alone
            </Text>
            <TouchableOpacity style={{width:'80%', marginBottom:'2%'}}>   
                <Button  mode="contained">
                    Register
                </Button>
            </TouchableOpacity> 
            <TouchableOpacity style={{width:'80%', marginBottom:'2%'}}>   
                <Button buttonColor='rgb(240, 219, 255)' mode="contained">
                    Login
                </Button>
            </TouchableOpacity> 
        </View>
    );
}
export default LoginOrRegister;
