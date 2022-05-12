//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screen
import {default as MobileOpenTasksModify} from './mobile/OpenTasksModify'
// create a component
const index = () => {
    return (
        <MobileOpenTasksModify/>
    );
};


//make this component available to the app
export default index;
