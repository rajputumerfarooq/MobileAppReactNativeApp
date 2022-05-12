//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// create a component
const TextInputWithLabels = ({
    label,
    value,
    placeHolder,
    inputStyle,
    textStyle,
    isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput/>
        </View>
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
export default TextInputWithLabels;
