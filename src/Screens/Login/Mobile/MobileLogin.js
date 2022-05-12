//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Platform
} from "react-native";
import styles from "./styles";
// Imports of UI
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Feather from "react-native-vector-icons/Feather";
// Imports for Api
import {
  RESPONCE_INVALID,
  RESPONSE_VALID,
} from "../../../api/ApiResponseCodes";

// API
import { apiLogin } from "../../../api/InvokeApi";

// For Form Validation Imports
import * as yup from "yup";
import { Formik } from "formik";
import NavigationStrings from "../../../Constants/NavigationStrings";
// For Navigation
import { useNavigation } from "@react-navigation/native";


// Redux
import { useDispatch } from 'react-redux'
import { SetUser } from '../../../Store/userReducer/type'


const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    //.email("Please enter valid email")
    .required("Email Address is required"),
  password: yup
    .string()
    //.min(8, ({min}) => `Password must be atleast ${min} characters`)
    .required("Password is required"),
  // .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //   ),
});

// create a component
const MobileLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const login = async (email, password) => {
 
    const response = await apiLogin(email, password);

 
    console.log(response)

    if (response.status == "200") {

      if(response.data.active == 'true') {

      const user = {

        userId: response.data.userId,
        firstName: response.data.firstname,
        lastName: response.data.lastname,
        roleName: response.data.rolename,
        roleID: response.data.roleId,
        userName:response.data.username,
        sessionToken: response.data.sessiontoken,
        active:response.data.active,
        profilePicture: response.data.picturePath
      };

      dispatch({ type: SetUser, payload: user });

      }
      else {

  

        global.userId= response.data.userId
        global.lastName= response.data.lastname
        global.firstName= response.data.firstname
        global.roleName= response.data.rolename
        global.roleID= response.data.roleId
        global.userName=response.data.username
        global.sessionToken= response.data.sessiontoken
        global.active=response.data.active
        global.profilePicture= response.data.picturePath


        navigation.navigate(NavigationStrings.ACCOUNT_VERIFICATION);
      }
    
    }

  else {
    Alert.alert("Invalid username or Password !", [
      { text: "Okay" },
    ]);
  }
  };

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values) => login(values.email, values.password)}
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View style={styles.container}>
          <StatusBar translucent />
          <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={[
              styles.footer,
              {
                backgroundColor: "#fff",
              },
            ]}
          >
            <Text
              style={[
                styles.text_footer,
                {
                  color: "black",
                },
              ]}
            >
              Username
            </Text>

            <View style={styles.action}>
              <FontAwesome name="user" color="#000000" size={20} style={styles.icon} />
              <TextInput
               // placeholder="Your Username"
                //placeholderTextColor="#666666"
                style={styles.textInput}
                // autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
               <TouchableOpacity
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                 
              </TouchableOpacity>
              {!errors.email ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome name="check-circle" color="green" size={20} style={styles.icon}  />
                </Animatable.View>
              ) : (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="transparent" size={20} style={styles.icon}  />
                </Animatable.View>
              )}
            </View>

            {errors.email && touched.email && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.email}</Text>
              </Animatable.View>
            )}

            <Text
              style={[
                styles.text_footer,
                {
                  color: "black",
                  marginTop: 35,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="black" size={20} style={styles.icon,{margin:12}}  />
              <TextInput
               // placeholder="Your Password"
              //  placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <TouchableOpacity
                onPress={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                {hidePassword ? (
                  <Feather name={"eye-off"} color="black" size={20} style={{margin: Platform.OS === 'ios' ? 10 : 10,}}  />
                ) : (
                  <Feather name="eye" color="black" size={20}  style={{margin: Platform.OS === 'ios' ? 10 : 10,}} />
                )}
              </TouchableOpacity>
            </View>

            {errors.password && touched.password && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}> {errors.password}</Text>
              </Animatable.View>
            )}

            <TouchableOpacity
              onPress={ ()=>{
                navigation.navigate(NavigationStrings.FORGET_PASSWORD_STACK)
              }}
            >
              <Text style={{ color: "#76b729", marginTop: 15 }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                disabled={isValid ? false : true}
                onPress={handleSubmit}
              >
                <LinearGradient
                  colors={["#76b729", "#76b729"]}
                  style={styles.signIn}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#fff",
                      },
                    ]}
                  >
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate(NavigationStrings.SIGNUP)}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#76b729",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#76b729",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            {/* <View style={styles.logoHeader}>
              <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                source={require("../../../assets/s2clogo.png")}
                style={styles.logo}
                resizeMode="stretch"
              />
            </View> */}
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

//make this component available to the app
export default MobileLogin;
