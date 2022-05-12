//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileViewExercises} from './Mobile/ViewExercise'


// create a component
const index = () => {
    return (
        <MobileViewExercises/>
    );
};


//make this component available to the app
export default index;
