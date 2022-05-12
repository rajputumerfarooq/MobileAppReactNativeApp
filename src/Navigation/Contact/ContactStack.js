import * as React from 'react';

// Navigation
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import { Contact } from '../../Screens';


 





export default function ContactStack() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Your Contacts"
      activeColor='#76b729'
      shifting= {true}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
          name="Your Contacts"
          component={Contact} 
      />
       
      <Tab.Screen
        name="Add New Contacts"
        component={Contact}
      />
       
    </Tab.Navigator>
  );
}