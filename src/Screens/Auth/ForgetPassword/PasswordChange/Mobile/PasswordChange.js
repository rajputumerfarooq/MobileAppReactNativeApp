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
import { useNavigation,useRoute } from "@react-navigation/native";
import NavigationStrings from "../../../../../Constants/NavigationStrings";

// Redux
import { useDispatch } from "react-redux";
import { SetUser } from "../../../../../Store/userReducer/type";

// create a component
const PasswordChange = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);


  const passwordValidationSchema = yup.object().shape({
    password: yup
      .string()
      .trim()
      .min(8, ({ min }) => `Password must be atleast ${min} characters`)
      .required("Password is required"),
    // confirmPassword: yup
    //   .string()
    //   .trim()
    //   .min(8, ({ min }) => `Password must be atleast ${min} characters`)
    //   .required("Password is required"),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
  });

  const _passwordChange = async (password) => {
    try {
      const response = await axios.post(

        "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/user/password/reset",
        { userId: global.userId,
            newPassw : password }
        );

      console.log(response.status);

      if (response.status == 200) {
        navigation.navigate(NavigationStrings.LOGIN);
      }
    } catch (error) {}
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validateOnMount={true}
      onSubmit={(values) => _passwordChange(values.password)}
      validationSchema={passwordValidationSchema}
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

            <Text style={styles.text_header}>Reset Password</Text>
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
                  marginTop: 35,
                },
              ]}
            >
              New Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="black" size={20} style={{margin:15}}/>
              <TextInput
              //  placeholder="New Password"
                placeholderTextColor="#666666"
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
                  <Feather name={"eye-off"} color="grey" size={20} style={{margin:10}}/>
                ) : (
                  <Feather name="eye" color="grey" size={20} style={{margin:10}}/>
                )}
              </TouchableOpacity>
            </View>

            {errors.password && touched.password && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}> {errors.password}</Text>
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
              Confirm Password
            </Text>
            <View style={styles.action}>
              <FontAwesome name="lock" color="black" size={20} style={{margin:15}}/>
              <TextInput
             //   placeholder="Confirm Password"
                placeholderTextColor="#666666"
                style={[
                  styles.textInput,
                  {
                    color: "black",
                  },
                ]}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              <TouchableOpacity
                onPress={() => {
                  setHideConfirmPassword(!hidePassword);
                }}
              >
                {hideConfirmPassword ? (
                  <Feather name={"eye-off"} color="black" size={20} style={{margin:10}}/>
                ) : (
                  <Feather name="eye" color="black" size={20} style={{margin:10}}/>
                )}
              </TouchableOpacity>
            </View>

            {errors.confirmPassword && touched.confirmPassword && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}> {errors.confirmPassword}</Text>
              </Animatable.View>
            )}

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
                    Save
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

//make this component available to the app
export default PasswordChange;
