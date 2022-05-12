//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../Constants/NavigationStrings';


 

 //Screens Import 
import { Schedular,SchedularTaskDetail,SchedularWorkout } from '../../Screens';

const Schedularstack = createNativeStackNavigator();

// create a component
export default function SchedularStack () {

    return (
        <Schedularstack.Navigator>

  
<Schedularstack.Screen name={NavigationStrings.SCHEDULAR} component={Schedular} options={{ headerShown: false }}/>  
            
<Schedularstack.Screen name={NavigationStrings.SCHEDULAR_TASK_DETAIL} component={SchedularTaskDetail} options={{ headerShown: false }}/>  
<Schedularstack.Screen name={NavigationStrings.SCHEDULAR_WORKOUT} component={SchedularWorkout} options={{ headerShown: false }}/>  
            
            
        
           


       </Schedularstack.Navigator>
    );
};


