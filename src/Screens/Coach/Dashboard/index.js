//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import {default as MobileCoachDashboard} from './Mobile/CoachDashboard';
import {default as TabletCoachDashboard} from './Tablet/CoachDashboard';
import Test from './Test';


// create a component
const index = () => {
    return (
    //  <TabletCoachDashboard/>
        // <Test></Test>
        <MobileCoachDashboard/>

    );
};



//make this component available to the app
export default index;
