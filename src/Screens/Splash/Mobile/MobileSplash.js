//import liraries
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import styles from './styles';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import NavigationStrings from '../../../Constants/NavigationStrings';


// create a component
const MobileSplash = () => {

    const navigation = useNavigation(); 

    const { height } = Dimensions.get("screen");
    const height_logo = height * 0.14;


    return (
        <View style={styles(height_logo).container}>
        
            <View style={styles(height_logo).header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../../assets/s2clogo.png')}
                    style={styles(height_logo).logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles(height_logo).footer, {
                    // backgroundColor: colors.trans
                    backgroundColor: '#a7aaa7'
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles(height_logo).title, {
                    color:  '#fff'
                }]}>Stay connected with everyone!</Text>
                <Text style={styles(height_logo).text}>Sign in with account</Text>
                <View style={styles(height_logo).button}>
                    <TouchableOpacity 
                    
                    onPress= { () => navigation.navigate(NavigationStrings.LOGIN)}
                    >
                        <LinearGradient
                            colors={['#76b729', '#76b729']}
                            style={styles(height_logo).signIn}
                        >
                            <Text style={styles(height_logo).textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color='#fff'
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};



//make this component available to the app
export default MobileSplash;
