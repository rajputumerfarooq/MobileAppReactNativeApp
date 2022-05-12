//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const ButtonComponent = () => {
    return (

        <TouchableOpacity
        style={styles.container}
        onPress = { () => alert("CHECKING")}
        >
            <Text 
             style={styles.text}>
            Dellete
            </Text>
                
        
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       height:'40%',
       width: '80%',
       borderRadius:8,
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
        backgroundColor: '#CD6061',
    },
    text:{
        fontSize:20,
        color:"#fff"
    }
});

//make this component available to the app
export default ButtonComponent;
