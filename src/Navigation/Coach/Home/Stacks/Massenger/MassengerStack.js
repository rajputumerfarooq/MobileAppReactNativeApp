//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Navigation
import NavigationStrings from '../../../../../Constants/NavigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


// Screens
import { Messenger } from '../../../../../Screens';





// create a component
const MassengerStack = () => {
    return (
   
    <Stack.Navigator>
        <Stack.Screen name={NavigationStrings.MESSENGER} component={Messenger} options={{ headerShown: false }} />              
    </Stack.Navigator>
    );
};



//make this component available to the app
export default MassengerStack;
