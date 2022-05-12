//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import {default as MobileNotification} from './Mobile/Notification'
import {default as TabletNotification} from './Tablet/Notification'

// create a component
const index = () => {
    return (
        <MobileNotification/>
    );
};



//make this component available to the app
export default index;
