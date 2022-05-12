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
  ScrollView
} from "react-native";
import styles from "./styles";
// Imports of UI
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import RNPickerSelect from 'react-native-picker-select';
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

//api functions
import { getCountries,getCities,getStates, getRoles } from '../../../api/InvokeApi';
 

const loginValidationSchema = yup.object().shape({
  
    firstname: yup
    .string()
    //.email("Please enter valid email")
    .required("First Name  is required"),
    lastname: yup
    .string()
    //.email("Please enter valid email")
    .required("Last Name  is required"),
    country: yup
    .string()
    //.email("Please enter valid email")
    .required("Country is required"),
    state: yup
    .string()
    //.email("Please enter valid email")
    .required("State is required"),
    city: yup
    .string()
    //.email("Please enter valid email")
    .required("City is required"),
    role: yup
    .string()
    //.email("Please enter valid email")
    .required("Role is required"),
    street: yup
    .string()
    //.email("Please enter valid email")
    .required("Street is required"),
    houseno: yup
    .string()
    //.email("Please enter valid email")
    .required("House No is required"),
    zip: yup
    .string()
    //.email("Please enter valid email")
    .required("Zip Code is required"),
    
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
const MobileSignup = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [countires,setCountires]=useState([]);
       
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);
      
    const [roles,setRoles]=useState([]);
   
     
    
    const _fetchAllCountries=async()=>{
        const response = await getCountries();
        const temp=[];
        
        for(i=0;i<response.data.length;i++){
            temp.push({label:response.data[i].name,value:response.data[i].id});
        }
         setCountires(temp);
   // console.log(temp);
    }
    const _fetchAllRoles=async()=>{
        const response = await getRoles();
        const temp=[];
        
        for(i=0;i<response.data.length;i++){
            temp.push({label:response.data[i].rolename,value:response.data[i].id});
        }
         setRoles(temp);
    }
    const _fetchAllStates=async(id)=>{
        const response = await getStates(id);
        const temp=[];
        
        for(i=0;i<response.data.length;i++){
            temp.push({label:response.data[i].name,value:response.data[i].id});
        }
         setStates(temp);
    }
    const _fetchAllCties=async(id)=>{
        const response = await getCities(id);
        const temp=[];
        
        for(i=0;i<response.data.length;i++){
            temp.push({label:response.data[i].name,value:response.data[i].id});
        }
         setCities(temp);
    }
 
  const login = async (email, password) => {

    const response = await apiLogin(email, password);

    if (JSON.stringify(response.status) == "200") {

      
      const user = {
        userId: response.data.userId,
        firstName: response.data.firstname,
        lastName: response.data.lastname,
        roleName: response.data.rolename,
        roleID: response.data.roleId,
        userName:response.data.username,
        sessionToken: response.data.sessiontoken,
      };




      dispatch({ type: SetUser, payload: user });
    }
  };

  const [hidePassword, setHidePassword] = useState(true);
  useEffect(() => {
        
             
    _fetchAllRoles();
    _fetchAllCountries();
},[]);
  return (
    <Formik
      initialValues={{ firstname:"",lastname:"",country:"",state:"",city:"",street:"",houseno:"",zip:"",role:"",email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values) => login(values.firstname,values.lastname,values.country,values.state,values.city,values.street,values.houseno,values.zip,values.role,values.email, values.password)}
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
       <ScrollView>
<Text style={styles.text_footer}>Name</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={handleChange("firstname")}
                        onBlur={handleBlur("firstname")}
                        
                    />
                    {!errors.firstname ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
                {errors.firstname && touched.firstname && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.firstname}</Text>
              </Animatable.View>
            )}








             {/* surname */}



             <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Surname</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Surname"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={handleChange("lastname")}
                        onBlur={handleBlur("lastname")}
                    />
                    {!errors.lastname ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
               
                {errors.lastname && touched.lastname && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.lastname}</Text>
              </Animatable.View>
            )}






<Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Country</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="flag"
                        color={colors.text}
                        size={20}
                    />

                    <View style={{ paddingLeft: 15,width:'89%' }}>
                        
                        
                           <RNPickerSelect
                         onValueChange={(value) => {
                            values.country=value;
                      
                           
                           // _fetchAllStates(value);
                        }}
                    //    placeholder={{label:'Select Your Country',value:' '}}
                     items={countires} />   
                    </View>
                    {!errors.country ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
                {errors.country && touched.country && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.country}</Text>
              </Animatable.View>
            )}
                 {/* state */}



                 <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>State</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="flag"
                        color={colors.text}
                        size={20}
                    />

                    <View style={{ paddingLeft: 15, width:'89%' }}>
                        
                        
                           <RNPickerSelect 
                         onValueChange={(value) => {
                            values.state=value; 
                            _fetchAllCties(value)
                        }}
                        placeholder={{label:'Select Your State',value:' '}}
                     items={states} />   
                    </View>

                    {!errors.state ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
                {errors.state && touched.state && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.state}</Text>
              </Animatable.View>
            )}
                {/* City */}



                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>City</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="home"
                        color={colors.text}
                        size={20}
                    />
                   <View style={{ paddingLeft: 15  ,width:'89%'}}>
                        
                        
                        <RNPickerSelect 
                      onValueChange={(value) => {
                        values.city=value;
                     }}
                     placeholder={{label:'Select Your City',value:' '}}
                  items={cities} />   
                 </View> 
                 {!errors.city ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
                {errors.city && touched.city && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.city}</Text>
              </Animatable.View>
            )}


                {/* Street */}



                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Street</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="home"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Street"
                        style={styles.textInput}
                        autoCapitalize="none"

                        onChangeText={handleChange("street")}
                        onBlur={handleBlur("street")}
                    />
                    {!errors.street ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
               
                {errors.street && touched.street && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.street}</Text>
              </Animatable.View>
            )}

                {/* House */}



                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>House No</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="home"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your House No"
                        style={styles.textInput}
                        keyboardType='numeric'
                        autoCapitalize="none"
                        onChangeText={handleChange("houseno")}
                        onBlur={handleBlur("houseno")}
                    />
                    {!errors.houseno ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
               
                {errors.houseno && touched.houseno && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.houseno}</Text>
              </Animatable.View>
            )}
                {/* Zip */}



                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Zip</Text>
                <View style={styles.action}>
                    <FontAwesome style={{ marginBottom: 5 }}
                        name="home"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Zip"
                        style={styles.textInput}
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={handleChange("zip")}
                        onBlur={handleBlur("zip")}
                    />
                    {!errors.zip ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
               
                {errors.zip && touched.zip && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.zip}</Text>
              </Animatable.View>
            )}
                
                {/* Coach */}
                <Text style={[styles.text_footer, {
                    marginTop: 15
                }]}>Role</Text>
                <View style={styles.action}>

                <View style={{ paddingLeft: 15,width:'89%'  }}>
                        
                        
                        <RNPickerSelect 
                        
                      onValueChange={(value) => {
                        values.role=value;
                        
                     }}
                     placeholder={{label:'Select Your Role',value:' '}}
                  items={roles} />   
                 </View>
                 {!errors.role ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
                </View>
                {errors.role && touched.role && (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{errors.role}</Text>
              </Animatable.View>
            )}



            <Text
              style={[
                styles.text_footer,
                {
                  color: "black",marginTop: 35,
                },
              ]}
            >
              Username
            </Text>

            <View style={styles.action}>
              <FontAwesome name="user-o" color="#000000" size={20} />
              <TextInput
                placeholder="Your Username"
                placeholderTextColor="#666666"
                style={styles.textInput}
                // autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {!errors.email ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null}
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
              <Feather name="lock" color="black" size={20} />
              <TextInput
                placeholder="Your Password"
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
                  <Feather name={"eye-off"} color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
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

            </ScrollView>
            
          </Animatable.View>
        </View>
      )}
    </Formik>
  );
};

//make this component available to the app
export default MobileSignup;
