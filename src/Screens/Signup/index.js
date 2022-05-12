//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MobileSignup from './Mobile/MobileSignup';
import TabletSignup from './Tablet/TabletSignup';

// create a component
const Signup = () => {
    const isMobile = true;



    return (
         
       <MobileSignup/>
             
         
       
    );
};


//make this component available to the app
export default Signup;
