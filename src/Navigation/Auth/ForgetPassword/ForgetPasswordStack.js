//import liraries
import React, { Component } from "react";
//Components
import {
  EmailVerification,
  PasscodeVerification,
  PasswordChange,
} from "../../../Screens";
//Navigation
import NavigationStrings from "../../../Constants/NavigationStrings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Import

const AuthStack = createNativeStackNavigator();

// create a component
const ForgetPasswordStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={NavigationStrings.FORGET_PASSWORD_STACK_EMAIL}
        component={EmailVerification}
        options={{ headerShown: false }}
      />


<AuthStack.Screen
        name={NavigationStrings.FORGET_PASSWORD_STACK_PASSCODE}
        component={PasscodeVerification}
        options={{ headerShown: false }}
      />    

      <AuthStack.Screen
        name={NavigationStrings.FORGET_PASSWORD_STACK_PASSCHANGE}
        component={PasswordChange}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

//make this component available to the app
export default ForgetPasswordStack;
