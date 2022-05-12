//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileExerciseDetails} from './Mobile/ExerciseDetails'


// create a component
const index = () => {
    return (
        <MobileExerciseDetails/>
    );
};



//make this component available to the app
export default index;
