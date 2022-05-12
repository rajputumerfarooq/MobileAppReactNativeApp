//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


//Importing Main and Auth Stack
import AuthStack from './Auth/AuthStack';

// Striker Navigation
import StrikerNavigation from './Striker/MainDrawerStack'
import {default as CoachNavigation} from './Coach/MainDrawerStack'


//redux
import { useSelector } from 'react-redux'
import { useEffect } from 'react';






  // create a component
const Routes = () => {

  const Tab = createMaterialBottomTabNavigator();

  useEffect( ()=>{

   // console.log(user)

  },[user]);

  //redux
  const { user } = useSelector(state => {
    return {
      user: state.userReducer.user
    }
  })


  const dashboardHandler= () => {

    if(user.roleName == 'Coach') {
      return <CoachNavigation/>
    } 
    else
      return <StrikerNavigation/>
  }




  return (
    <>
    {user? dashboardHandler() :<AuthStack/>}
    </>
  );


  

};

//make this component available to the app
export default Routes;
