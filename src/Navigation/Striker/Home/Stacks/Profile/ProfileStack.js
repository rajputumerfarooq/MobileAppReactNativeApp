//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Navigation
import NavigationStrings from '../../../../../Constants/NavigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


// Screens
import { Profile } from '../../../../../Screens';





// create a component
const ProfileStack = () => {
    return (
   
    <Stack.Navigator>
        <Stack.Screen name={NavigationStrings.STRIKER_PROFILE} component={Profile} options={{ headerShown: false }} />              
    </Stack.Navigator>

    );
};



//make this component available to the app
export default ProfileStack;
