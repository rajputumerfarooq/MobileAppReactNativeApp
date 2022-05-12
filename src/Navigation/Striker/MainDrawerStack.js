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
import OpenTasksStack from "../OpenTasks/OpenTasksStack";
import SchedularStack from "../Schedular/index";

//Screens
import { Planner,OpenTasks} from "../../Screens";

//Header
import Header from "../../Components/Header/Header";
import { default as LocationTracking } from "../../Screens/Common/LocationTracking/LocationTracking";





 

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
        name={NavigationStrings.STRIKER_HOME}
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
        name={NavigationStrings.SCHEDULAR_STACK}
        component={SchedularStack}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />

      <Drawer.Screen
        name={NavigationStrings.OPEN_TASKS_STACK}
        component={OpenTasksStack}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />

<Drawer.Screen
        name={NavigationStrings.TEST}
        component={LocationTracking}
        options={{ header: (navigation) => <Header navigation={navigation} /> }}
      />



      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} />  */}

    </Drawer.Navigator>
    
  );
}
