import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//Navigation Strings
import NavigationStrings from '../../../Constants/NavigationStrings';

//Stacks
import DashboardStack from './Stacks/Dashboard/DashboardStack'
import NotificationStack from './Stacks/Notification/NotificationStack'
import ProfileStack from './Stacks/Profile/ProfileStack'
import MessengerStack from './Stacks/Messenger/MessengerStack';



function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}




export default function index() {

  const Tab = createMaterialBottomTabNavigator();


  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor='#76b729'
      shifting= {true}
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}
    >
        <Tab.Screen
            name={NavigationStrings.STRIKER_DASHBOARD_STACK}
            component={DashboardStack}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarColor: 'transparent',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color='#76b729' size={26} />
                ),
            }}
        />


      <Tab.Screen
        name={NavigationStrings.STRIKER_NOTIFICATION_STACK}
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: 'transparent',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color='#76b729' size={26} />
          ),
        }}
      />

      <Tab.Screen
        name={NavigationStrings.MESSENGER}
        component={MessengerStack}
        options={{
        
          tabBarLabel: 'Messenger',
          tabBarColor: 'transparent',
          tabBarIcon: ({ color }) => (
            <Icon name="chatbox" color='#76b729' size={26} />
          ),
        }}
      />


      <Tab.Screen
        name={NavigationStrings.STRIKER_PROFILE_STACK}
        component={ProfileStack}
        options={{
        
          tabBarLabel: 'Profile',
          tabBarColor: 'transparent',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color='#76b729' size={26} />
          ),
        }}
      />
                    
    </Tab.Navigator>
  );
}