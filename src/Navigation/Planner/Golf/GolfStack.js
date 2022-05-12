//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../../Constants/NavigationStrings';
//Screens
import { Planner, Category, GolfSubCategories, GolfExercises,GolfExerciseDetails } from '../../../Screens';


// create a component
const GolfStack = () => {

    const GolfStack = createNativeStackNavigator();
    return (


        <GolfStack.Navigator>       
            <GolfStack.Screen name={NavigationStrings.GOLF_SUBCATEGORIES} component={GolfSubCategories} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.GOLF_EXERCISES} component={GolfExercises} options={{ headerShown: false }}/>
            <GolfStack.Screen name={NavigationStrings.GOLF_EXERCISE_DETAIL} component={GolfExerciseDetails} options={{ headerShown: false }}/>
        </GolfStack.Navigator>    

    );
};


//make this component available to the app
export default GolfStack;
