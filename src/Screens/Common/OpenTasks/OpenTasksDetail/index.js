//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screen
import {default as MobileOpenTasksDetail} from './mobile/OpenTasksDetail'
// create a component
const index = () => {
    return (
        <MobileOpenTasksDetail/>
    );
};


//make this component available to the app
export default index;
