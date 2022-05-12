//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Screens
import {default as MobilePasscodeVerification} from './Mobile/PasscodeVerification1';



// create a component
const index = () => {
    return (
        <MobilePasscodeVerification/>
    );
};



//make this component available to the app
export default index;
