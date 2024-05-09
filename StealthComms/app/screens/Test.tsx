import React from "react";
import {  View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';


function Test() {
    const navigation = useNavigation();
    return (
        <View>
        <Button title="Press me" onPress={() => navigation.navigate('MyTabs') } />
        </View>
    );
}
export default Test;
