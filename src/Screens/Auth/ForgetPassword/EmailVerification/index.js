//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


//Screens
import EmailVerification, {default as MobileEmailVerification} from './Mobile/EmailVerification'

// create a component
const index = () => {
  return (
    <EmailVerification/>
  );
};


//make this component available to the app
export default index;
