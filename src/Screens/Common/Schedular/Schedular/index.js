//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileSchedular} from './Mobile/Schedular'
import {default as TabletSchedular} from './Tablet/Schedular'

// create a component
const index = () => {
    return (
        <MobileSchedular/>
    );
};


//make this component available to the app
export default index;
