//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./styles1";
// Imports of UI
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import OTPInputView from "@twotalltotems/react-native-otp-input";

// For Form Validation Imports
import * as yup from "yup";
import { Formik } from "formik";
//API
import axios from "axios";

// For Navigation
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../../../../Constants/NavigationStrings";


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

  const _verifyToken = async (funcToken) => {


    try {
      const response = await axios.post(
        "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/user/validate/token",
        {
          token: funcToken,
        }
      );
      if (response.status == 200) {

        global.userId = response.data
      
         navigation.navigate(NavigationStrings.FORGET_PASSWORD_STACK_PASSCHANGE)
        }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "" }}
      validateOnMount={true}
      onSubmit={(values) => login(values.email)}
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

                  alignSelf: "center",
                },
              ]}
            >
              Enter One Time Password
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <OTPInputView
                style={{ width: "100%", height: 50 }}
                pinCount={6}
                editable={true}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                  _verifyToken(code)
                
                }}
              />
            </View>

            <View style={styles.button}>
              {/* <TouchableOpacity
                onPress={() =>
                  navigation.navigate(
                    NavigationStrings.FORGET_PASSWORD_STACK_PASSCODE
                  )
                }
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
                  Next
                </Text>
              </TouchableOpacity> */}
            </View>
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

//make this component available to the app
export default EmailVerification;
