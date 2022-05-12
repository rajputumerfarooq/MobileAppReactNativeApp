//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from '../../Constants/NavigationStrings';

//Screens
import { OpenTasks, OpenTasksDetail,OpenTasksModify } from '../../Screens';
// create a component
const OpenTasksStack = () => {

    const Opentasksstack = createNativeStackNavigator();



    return (
        <Opentasksstack.Navigator>       
      
            <Opentasksstack.Screen name={NavigationStrings.OPEN_TASKS} component={OpenTasks} options={{ headerShown: false }}/>
            <Opentasksstack.Screen name={NavigationStrings.OPEN_TASKS_DETAIL} component={OpenTasksDetail} options={{ headerShown: false }}/>
            <Opentasksstack.Screen name={NavigationStrings.OPEN_TASKS_MODIFY} component={OpenTasksModify} options={{ headerShown: false }}/>

         
        </Opentasksstack.Navigator> 
    );
};


//make this component available to the app
export default OpenTasksStack;
