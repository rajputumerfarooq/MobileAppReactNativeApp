//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../../Constants/NavigationStrings';
//Screens
import {AthleticSubCategories, AthleticBodytypes, AthleticEquipmentTypes,AthleticExercises,AthleticExerciseDetails, AthleticViewExercises } from '../../../Screens';


// create a component
const AthelticStack = () => {

    const GolfStack = createNativeStackNavigator();
    return (
        <GolfStack.Navigator>       
      
            <GolfStack.Screen name={NavigationStrings.ATHELTIC_SUBCATEGORIES} component={AthleticSubCategories} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.ATHELTIC_BODYTYPES} component={AthleticBodytypes} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.ATHELTIC_EQUIPMENTTYPES} component={AthleticEquipmentTypes} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.ATHELTIC_EXERCISES} component={AthleticExercises} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.ATHELTIC_EXERCISE_DETAIL} component={AthleticExerciseDetails} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.ATHLETIC_VIEW_EXERCISE} component={AthleticViewExercises} options={{ headerShown: false }}/>

         
        </GolfStack.Navigator>       
    );
};


//make this component available to the app
export default AthelticStack;
