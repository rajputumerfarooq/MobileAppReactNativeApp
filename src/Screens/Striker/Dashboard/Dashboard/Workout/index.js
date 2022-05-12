//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileSchedular} from './SubCategories/index'
 

// create a component
const index = () => {
    return (
        <MobileSchedular/>
    );
};


//make this component available to the app
export default index;
