//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileExercises} from './Mobile/Exercises'


// create a component
const index = () => {
    return (
        <MobileExercises/>
    );
};



//make this component available to the app
export default index;
