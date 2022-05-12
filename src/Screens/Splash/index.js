//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MobileSplash from './Mobile/MobileSplash';
import TabletSplash from './Tablet/TabletSplash';


// create a component
const Splash = () => {
    const isMobile = true;

    // function checkDevice () {
    //     if (isMobile)
    //         return MobileSplash
    //     else    
    //         return TabletSplash
    // }



    return (

        <View style= {{flex:1}}>
           {isMobile? <MobileSplash></MobileSplash> : <TabletSplash></TabletSplash>} 
        </View>
 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default Splash;
