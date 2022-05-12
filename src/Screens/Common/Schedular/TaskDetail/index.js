//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileTaskDetail} from './Mobile/TaskDetail'
import {default as TabletSchedular} from './Tablet/Schedular'

// create a component
const index = () => {
    return (
        <MobileTaskDetail/>
    );
};


//make this component available to the app
export default index;
