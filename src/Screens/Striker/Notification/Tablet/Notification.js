//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Styles
import styles from './styles'


// create a component
const Notification = () => {
    return (
        <View style={styles.container}>
            <Text>Notification Tablet</Text>
        </View>
    );
};



//make this component available to the app
export default Notification;
