//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


// Navigation
import NavigationStrings from '../../../../../Constants/NavigationStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


// Screens
import { CoachNotification } from '../../../../../Screens';





// create a component
const NotificationStack = () => {
    return (
   
    <Stack.Navigator>
        <Stack.Screen name={NavigationStrings.COACH_NOTIFICATION} component={CoachNotification} options={{ headerShown: false }} />              
    </Stack.Navigator>

    );
};



//make this component available to the app
export default NotificationStack;
