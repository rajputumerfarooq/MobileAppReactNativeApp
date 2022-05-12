//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../Constants/NavigationStrings';


 
// Stacks
import {default as GolfStack} from './Golf/GolfStack'
import {default as AthelticStack} from './Atheltic/AthelticStack'
 //Screens Import 
import { Planner, } from '../../Screens';

const Plannerstack = createNativeStackNavigator();

// create a component
export default function PlannerStack () {

    return (
        <Plannerstack.Navigator>

  
            <Plannerstack.Screen name={NavigationStrings.STRIKER_PLANNER} component={Planner} options={{ headerShown: false }}/>  
            <Plannerstack.Screen name={NavigationStrings.STRIKER_GOLF_STACK} component={GolfStack} options={{headerShown: false}} />
            <Plannerstack.Screen name={NavigationStrings.STRIKER_ATHELTIC_STACK} component={AthelticStack} options={{headerShown: false}} />
        
            
        
         




       </Plannerstack.Navigator>
    );
};


