//import liraries
import React, { Component } from "react";
//Components
import { Login, Signup, Splash, AccountVerification } from "../../Screens";
//Navigation
import NavigationStrings from "../../Constants/NavigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Stacks
import ForgetPasswordStack from "./ForgetPassword/ForgetPasswordStack";
import HeaderAuth from "../../Components/Header/HeaderAuth";
//Header
//Header

const Stack = createNativeStackNavigator();

// create a component
const AuthStack = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={NavigationStrings.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name={NavigationStrings.LOGIN}
        component={Login}
        options={{ header: (navigation) => <HeaderAuth navigation={navigation} /> }}
      />
      <Stack.Screen
        name={NavigationStrings.SIGNUP}
        component={Signup}
        options={{ header: (navigation) => <HeaderAuth navigation={navigation} /> }}
      />

      <Stack.Screen
        name={NavigationStrings.FORGET_PASSWORD_STACK}
        component={ForgetPasswordStack}
        options={{ header: (navigation) => <HeaderAuth navigation={navigation} /> }}
      />

      <Stack.Screen
        name={NavigationStrings.ACCOUNT_VERIFICATION}
        component={AccountVerification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default AuthStack;
