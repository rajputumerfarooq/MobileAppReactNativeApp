//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileWorkout} from './Mobile/WorkOut'
import {default as TabletSchedular} from './Tablet/Schedular'

// create a component
const index = () => {
    return (
        <MobileWorkout/>
    );
};


//make this component available to the app
export default index;
