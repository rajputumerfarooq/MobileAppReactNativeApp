//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as MobileCategories} from './Mobile/Categories'


// create a component
const index = () => {
    return (
        <MobileCategories/>
    );
};



//make this component available to the app
export default index;
