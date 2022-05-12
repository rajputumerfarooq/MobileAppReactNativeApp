//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MobileLogin from './Mobile/MobileLogin';
import TabletLogin from './Tablet/TabletLogin';



// create a component
const Login = () => {
    
    const isMobile = true;



    return (
            <View style = {{flex:1}}>
            {isMobile? <MobileLogin/>: <TabletLogin/>}
            </View>
    );
};


//make this component available to the app
export default Login;
