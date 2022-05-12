import * as React from "react";
import { Button, View, Image } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";



// Navigation 
import NavigationStrings from "../../Constants/NavigationStrings";
import {DrawerContent} from './MainDrawerContent'








// Stacks
import {default as Home} from './Home'
import ContactStack from "../Contact/ContactStack";
import  PlannerStack from '../Planner/index'


//Screens
import { CoachPlanner, Schedular} from "../../Screens";
import Statistics from "../../Screens/Common/Statistics/Mobile/Statistics";


//Header
import Header from "../../Components/Header/Header";





function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MainDrawerStack() {
  return (

    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name={NavigationStrings.COACH_DASHBOARD_STACK}
        component={Home}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />


      <Drawer.Screen
        name={NavigationStrings.CONTACT}
        component={ContactStack}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />


      <Drawer.Screen
        name={NavigationStrings.PLANNER_STACK}
        component={PlannerStack}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />
  

      <Drawer.Screen
        name={NavigationStrings.SCHEDULAR}
        component={Schedular}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />

      <Drawer.Screen
        name={NavigationStrings.STATISTICS}
        component={Statistics}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />


      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} />  */}

    </Drawer.Navigator>
    
  );
}
