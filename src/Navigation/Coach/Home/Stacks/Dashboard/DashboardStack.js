//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';




// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../../../../Constants/NavigationStrings';
const Stack = createNativeStackNavigator();


// Screens
import {  CoachDashboard, TeamMembers,StrikerDashboard } from '../../../../../Screens';


 



// create a component
const DashboardStack = () => {
    return (
   
    <Stack.Navigator>         
        <Stack.Screen name={NavigationStrings.COACH_DASHBOARD} component={CoachDashboard} options={{ headerShown: false }} /> 
        <Stack.Screen name={NavigationStrings.COACH_DASHBOARD_TEAM_MEMBERS} component={TeamMembers} options={{ headerShown: false }} />                
      <Stack.Screen name={NavigationStrings.STRIKER_DASHBOARD} component={StrikerDashboard} options={{ headerShown: false }} />              
 
   </Stack.Navigator>


    );
};



//make this component available to the app
export default DashboardStack;
