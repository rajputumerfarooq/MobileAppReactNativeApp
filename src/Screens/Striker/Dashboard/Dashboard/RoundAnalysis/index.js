//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RoundAnalysisComponent from './RoundAnalysisComponent';



// create a component
const index = () => {
    return (
        <RoundAnalysisComponent/>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default index;
