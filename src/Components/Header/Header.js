//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, Image,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


//Navigation
import { useNavigation } from '@react-navigation/native';
// create a component
const Header = () => {


    const navigation = useNavigation();
    return (
        <SafeAreaView style={{
            flexDirection: 'row', backgroundColor:'#fff', borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: Platform.OS === "android" ? 10 : -30,
            paddingTop: 10,
        }}>
            <View style={{ width: "20%", flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: '#fff'}}>
                <Icon.Button name="ios-menu" backgroundColor={'#fff'} color='black' size={40} onPress={() => {
                    navigation.toggleDrawer();
                }}>

                </Icon.Button>

            </View>


            <View style={{
                width: "80%", flexDirection: 'row', justifyContent: 'center', marginLeft:
                    Platform.OS === "android" ? - 35 : -40,
            }}>
                <Image source={require('../../assets/s2clogo.png')} style={styles.image} />
            
            </View>



        </SafeAreaView>
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
      image: {
    width: '60%',
    height: 50,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight - 18 : 0,
  },
});

//make this component available to the app
export default Header;
