//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Screen
import {default as OpenTasks} from './Mobile/OpenTasks';
// create a component
const index = () => {
    return (
        <OpenTasks/>
    );
};


//make this component available to the app
export default index;
