//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import {default as TabletMassenger} from './Tablet/Messenger';
import {default as MobileMessenger} from './Mobile/Messenger';


// create a component
const index = () => {
    return (
        <MobileMessenger/>
    );
};



//make this component available to the app
export default index;
