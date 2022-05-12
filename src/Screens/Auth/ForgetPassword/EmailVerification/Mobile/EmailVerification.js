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
} from "react-native";
import styles from "./styles";
// Imports of UI
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
// Imports for Api
import {
  RESPONCE_INVALID,
  RESPONSE_VALID,
} from "../../../api/ApiResponseCodes";

// API
import axios from "axios";

// For Form Validation Imports
import * as yup from "yup";
import { Formik } from "formik";
// For Navigation
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../../../../Constants/NavigationStrings";

// Redux
import { useDispatch } from "react-redux";
import { SetUser } from "../../../../../Store/userReducer/type";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is required"),
  //password: yup
   // .string()
    //.min(8, ({min}) => `Password must be atleast ${min} characters`)
   // .required("Password is required"),
  // .matches(
  //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  //   ),
});

// create a component
const EmailVerification = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const _verifyEmail = async (email) => {
    try {
        const response =  await axios.post( "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/user/password/resetter" , {loginEmail:email} ); 
           
     //   console.log(response.status) 
        
        if ( response.status == 200) {
            navigation.navigate(NavigationStrings.FORGET_PASSWORD_STACK_PASSCODE)
        }
       } catch (error) {
            }
};


  return (
    <Formik
      initialValues={{ email: "" }}
      validateOnMount={true}
      onSubmit={(values) => _verifyEmail(values.email)}
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
            <View style={{flexDirection:'row'}}>
            
            <View style={{flexDirection:'column',width:'20%'}}>  
            <TouchableOpacity onPress={() => navigation.goBack()}
            style={{ marginLeft:20}}
            >
            <Ionicons name="arrow-back-sharp" size={30} />
          </TouchableOpacity>
            </View>
            <View style={{flexDirection:'column',width:'90%'}}>

            <Text style={styles.text_header}>Forget Password!</Text>
            </View>
            </View>
           
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
              Email*
            </Text>

            <View style={styles.action}>
              <FontAwesome name="envelope" color="#000000" size={20} style={{margin:10}} />
              <TextInput
             //   placeholder="Your Email"
                placeholderTextColor="#666666"
                style={styles.textInput}
                // autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {!errors.email ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} style={{margin:10}}  />
                </Animatable.View>
              ) : null}
            </View>

            {errors.email && touched.email && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.email}</Text>
              </Animatable.View>
            )}





            <View style={styles.button}>


              <TouchableOpacity
           

                onPress={handleSubmit}
            
                style={[
                  styles.signIn,
                  {
                    borderColor: "#76b729",   backgroundColor: "#76b729",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>


          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

//make this component available to the app
export default EmailVerification;
