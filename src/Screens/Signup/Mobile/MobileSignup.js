//import liraries

import styles from "./styles";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../../Constants/NavigationStrings";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNPickerSelect from "react-native-picker-select";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import ImagePicker from "react-native-image-crop-picker";
import { androidCameraPermission } from "../Permissions/Permissions";
require 
import LinearGradient from "react-native-linear-gradient";
import colors from "../../../assets/colors";
import {
  getCountries,
  getCities,
  getStates,
  getRoles,
} from "../../../api/InvokeApi";
import { RNS3 } from "react-native-aws3";
import demoProfile from '../../../assets/demoProfile.png'
import { Avatar } from "react-native-paper";
import { API_verifyEmail,API_REGISTER_USER } from "../../../api/urls";

// create a component
const MobileSignup = () => {
  
  
  
    const _imageUpload = async (image) => {
    const file = {
      uri: image.path,
      name: image.filename,
      type: "image/png",
    };

  
    const config = {
      bucket: "s2cprofilepictures",
      region: "eu-central-1",
      accessKey: "AKIAZ7EFCIOCK2EMWQ7A",
      secretKey: "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",
      successActionStatus: 201,
    };

 

    RNS3.put(file, config).then((response) => {
        setData({
            ...data,
            ProfilePicture: response.body.postResponse.location ,
          });  
    });




    _RegisterUser();

    
  };



  const onCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      forceJpg: true,
    }).then((image) => {
      // console.log(image);
      _imageUpload(image);
    });
  };



  

  const onGalary = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {

      setImageObject( image )

     
    });
  };

  const imageUploadHandler = async () => {
    const permissionStatus = await androidCameraPermission();

    if (permissionStatus || Platform.OS == "ios") {
      Alert.alert("Profile Picture", "Choose an Option", [
        { text: "Camera", onPress: onCamera },
        { text: "Gallary", onPress: onGalary },
        { text: "Cancel", onPress: () => {} },
      ]);
    }
  };

  const navigation = useNavigation();

  const [gender, setGender] = useState(true);
  const [coach, setCoach] = useState(true);
  const letters = '/^[a-zA-Z\s]*$/';

  const numbers = /^[0-9]+$/;
  
  const password = /^(?=.*\d).{8,}$/;
  const [DOB, setDOB] = useState(new Date());
  const [imageObject, setImageObject] = useState ("")
  const [isDOBVisible, setDOBVisibility] = useState(false);
  const [data, setData] = React.useState({
    Prename: "",
    Lastname: "",
    Birthdate: "",
    Street: "",
    HouseNumber: "",
    PostalCode: "",
    Country: "",
    City: "",
    State: "",

    ProfilePicture: "",

    Email: "",
    Gender: "1",
    Role: "",

    mail: "",
    Street: "",
    username: "",
    password: "",
    confirm_password: "",

    
     
    error_Country: true,
    error_City: true,
    error_State: true,
   
    error_Role: true,
    error_DOB: true,
    error_Email: true,
    error_UserName: true,
    error_Password: true,
    error_ConfrimPassword: true,

    check_Email: false,
    check_PostalCode: false,

    check_HouseNumber: false,
    check_Prename: false,

    check_Street: false,
    check_City: false,
    check_LastName: false,
    check_MailChange: false,

    check_Country: false,

    check_State: false,

    check_City: false,

    check_Role: false,
    check_dob:false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidPassword: true,
    confirmIsValidPassword: true,
    isMatchPassword: true,
    isRequired: true,
  });
  const [error, setError] = React.useState({
    FirstName: "",
    LastName:"",
    DOB:"",
    pic:"",
    Street: "",
    House: "",
    Zip: "",
  });
  
  const [countires, setCountires] = useState([]);

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [roles, setRoles] = useState([]);

  const _fetchAllCountries = async () => {
    const response = await getCountries();
    const temp = [];

    for (i = 0; i < response.data.length; i++) {
      temp.push({ label: response.data[i].name, value: response.data[i].id });
    }
    setCountires(temp);
  };

     
  const _fetchAllRoles = async () => {
    const response = await getRoles();
    const temp = [];
   
    for (i = 0; i < response.data.length; i++) {
      temp.push({
        label: response.data[i].rolename,
        value: response.data[i].id,
      });
    }
    setRoles(temp);
  };
  const _fetchAllStates = async (id) => {
    const response = await getStates(id);
    const temp = [];

    for (i = 0; i < response.data.length; i++) {
      temp.push({ label: response.data[i].name, value: response.data[i].id });
    }
    setStates(temp);
  };
  const _fetchAllCties = async (id) => {
    const response = await getCities(id);
    const temp = [];

    for (i = 0; i < response.data.length; i++) {
      temp.push({ label: response.data[i].name, value: response.data[i].id });
    }
    setCities(temp);
  };

  const RegisterHandle = () => {
    
  
      if (data.Prename === "") 
    {
      setError({  ...error, FirstName: '*First name cannot be empty', });
         
    return  ;  } 
   
    // if (!isNaN(Number(val))) {  setError({  ...error,  FirstName: "*First name cannot contain any numbers", });   

    
    // return ;}
    
     
    if (data.Lastname === "") {
      setError({
        ...error,
        LastName: '*Last name cannot be empty',
      });
      return;
    }
    let datecheck = new Date();
    if (DOB.getFullYear() > datecheck.getFullYear() - 10) {
      setError({
        ...error,
        DOB: '*Birthdate is not valid',
      });
      return;
    }
    if (DOB.getFullYear() < datecheck.getFullYear() - 10) {
      setError({
        ...error,
        DOB: '',
      });
   
    }
    
    if (!imageObject) {
      setError({...error,pic:'*Upload an image!'})
      return;
    }
    if (imageObject) {
      setError({...error,pic:''})
      
    }
    if (data.Street.length == 0) {
      setError({...error,
        Street: "*Street cannot be empty",
      });
      return;
    }
    if (data.HouseNumber.length == 0) {
      setError({...error,
         House: "*House number cannot be empty",
      });
      return;
    }
    if (data.PostalCode.length == 0) {
      setError({...error,
      Zip: "*Zip code cannot be empty",
      });
      return;
    }


    if (data.check_Country == false) {
      setData({
        ...data,
        error_Country: false,
      });
      return;
    }
    if (data.check_State == false) {
      setData({
        ...data,
        error_State: false,
      });
      return;
    }

    if (data.check_City == false) {
      setData({
        ...data,
        error_City: false,
      });
      return;
    }
   
    if (data.check_Role == false) {
      setData({
        ...data,
        error_Role: false,
      });
      return;
    }
 
    if (data.check_Email == false) {
      setData({
        ...data,
        error_Email: false,
      });
      return;
    }
    if (data.mail.length == 0) {
      setData({
        ...data,
        error_UserName: false,
      });
      return;
    }
    if (data.password.length == 0) {
      setData({
        ...data,
        error_Password: false,
      });
      return;
    }
    if (data.confirm_password.length == 0) {
      setData({
        ...data,
        error_ConfrimPassword: false,
      });
      return;
    }
    if (data.isValidPassword == false) {
      return;
    }
    if (data.confirmIsValidPassword == false) {
      return;
    }
    if (data.isMatchPassword == false) {
      return;
    }
    if (gender == false) {
      setData({
        ...data,
        Gender: "0",
      });
    } else {
      setData({
        ...data,
        Gender: "1",
      });
    }
    setError({
      ...error,
      FirstName: "",
    });;

    setData({
      ...data,
      isRequired: false,
    });
    let isVerified = _verifyEmail()

   
  };

  const _verifyEmail = async () => {
    try {

      const response = await axios.post(
        API_verifyEmail,
        {   type:2,
            email: data.Email,
            username: data.mail
        },
        { headers: { "content-type": "application/json" } }
      );

       
      if ( response.data.status == '401' || response.data.status == '402' ){
        
        if (response.data.status == '401')
          Alert.alert("Email is already taken")
        else
          Alert.alert("Username is already taken")
       
      }

      else{



   
        _imageUpload(imageObject)
        setError({...error,pic:''})

      }

    
        

    } catch (error) {
      alert("Username or Email Already Exist");
    }
  };

  const _RegisterUser = async () => {



    try {
      const response = await axios.post(
        "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/user/register",
        {
            role: data.Role,
            firstname: data.Prename,
            lastname: data.Lastname,
            country: data.Country,
            state: data.State,
            city: data.City,
    
            address: data.Street,
            houseno: data.HouseNumber,
            postcode: data.PostalCode,
            genderId: data.Gender,
            dateofbirth: DOB,
            email: data.Email.toLowerCase(),
            picture: data.ProfilePicture,
            registrationdate: DOB, //'10/11/2021',
    
            username: data.mail,
            password: data.password,
          },
        { headers: { "content-type": "application/json" } }
      );
console.log(response)
      if (JSON.stringify(response.status) == "403") {
        Alert.alert("Invalid User!", "Username is Already Taken.", [
          { text: "Okay" },
        ]);
        return;
      }
      if (JSON.stringify(response.status) == "201") {
        Alert.alert("Successfully Registered", "Welcome to Striker 2 Coach.", [
          { text: "Okay" },
        ]);

        navigation.navigate(NavigationStrings.LOGIN)
 

        return;
       
      }
    } catch (error) {
        Alert.alert("Input Type not Valid", [
            { text: "Okay" },
          ]);
       
    }
  };


  const handleDOBConfirm = (date) => {
    setDOB(date);
  setData({...data, check_dob:true})
    hideDOBPicker();
  };
  const showDOBPicker = () => {
    setDOBVisibility(true);
  };
  const hideDOBPicker = () => {
    setDOBVisibility(false);
  };
  const getStringStart = () => {
    var day = DOB.getDate();

    var year = DOB.getFullYear();
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var monthIndex = DOB.getMonth();
 
    return day + " " + monthNames[monthIndex] + " " + year;
  };

  const emailSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        Email: val,
        check_Email: true,
        error_Email: true,
      });
      console.log(data.Email);
    } else {
      setData({
        ...data,
        Email: val,
        check_Email: false,
      });
    }
  };
  const mailSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        mail: val,
        check_MailChange: true,
        error_UserName: true,
      });
    } else {
      setData({
        ...data,
        mail: val,
        check_MailChange: false,
      });
    }
  };
  const prenameSet = (val) => {
    if (val.length !== 0) {
 
      setData({
        ...data,
        Prename: val,
        check_Prename: true,
       // error_FirstName: true,
      
      });
   
    } else {
      setData({
        ...data,
        Prename: val,
        check_Prename: false,
      });
    }
  };
  const lastNameSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        Lastname: val,
        check_LastName: true,
        
      });

    } else {
      setData({
        ...data,
        Lastname: val,
        check_LastName: false,
      });
    }
  };
  const streetSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        Street: val,
        check_Street: true,
        error_Street: true,
      });
      setError({
        ...error,
        Street: '',
       
        
      });
      
    } else {
      setData({
        ...data,
        Street: val,
        check_Street: false,
      });
    }
  };

  const HouseNumberSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        HouseNumber: val,
        check_HouseNumber: true,
        error_House: true,
      });

      setError({
        ...error,
        House: '',
       
        
      });
    } else {
      setData({
        ...data,
        HouseNumber: val,
        check_HouseNumber: false,
      });
    }
  };

  const PostalCodeSet = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        PostalCode: val,
        check_PostalCode: true,
        error_Zip: true,
      });
      setError({
        ...error,
        Zip: '',
       
        
      });
    } else {
      setData({
        ...data,
        PostalCode: val,
        check_PostalCode: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
        error_Password: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const handleConfirmPasswordChange = (val) => {
    if (val.trim().length >= 8) {
      if (val == data.password) {
        setData({
          ...data,
          confirm_password: val,
          isMatchPassword: true,
          confirmIsValidPassword: true,
          error_ConfrimPassword: true,
        });
      } else {
        setData({
          ...data,
          isMatchPassword: false,
          confirm_password: val,
          confirmIsValidPassword: true,
        });
      }
    } else {
      setData({
        ...data,
        confirm_password: val,
        confirmIsValidPassword: false,
        isMatchPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  useEffect(() => {
    _fetchAllRoles();
    _fetchAllCountries();
  }, []);
  return (
    
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.header}>
        <Text style={styles.text_header}>Registration</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}>
        <ScrollView   >
          <Text style={styles.text_footer}>First name*</Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="user"
              color={colors.text}
              size={20}
            />
            <TextInput
             // placeholder="First name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => prenameSet(val)}
            />
            {data.check_Prename ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) :   (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            )  }
          </View>
          {data.check_Prename ?  null : error.FirstName.length==0 ? (
              null
            ) : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{error.FirstName}</Text>
              </Animatable.View>
            )}
          {/* surname */}

          

          <Text
            style={[
              styles.text_footer,
              {
               // marginTop: -35,
              },
            ]}
          >
            Last name*
          </Text>
          <View style={styles.action}>
            <FontAwesome
             style={styles.icon}
              name="user"
              color={colors.text}
              size={20}
            />
            <TextInput
             // placeholder="Last name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => lastNameSet(val)}
            />
            {data.check_LastName ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) :  (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            )  }
          </View>
          {data.error_LastName==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{error.LastName}</Text>
              </Animatable.View>
            )}




          {/* date of birth */}
          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
           Birthdate*
          </Text>
         <View style={styles.action}>
          <FontAwesome
             style={[styles.icon,{paddingTop:10}]}
              name="user"
              color={colors.text}
              size={20}
            />
          <View style={styles.dobBox}>
          
            <TouchableOpacity
              onPress={showDOBPicker}
              style={{
                width: "80%",
                padding: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  backgroundColor: colors.background,
                  borderColor: "transparent",
                  color: colors.text,
                  width: "80%",
                  
                  //height: 80,
                  fontSize: 16,
                 // justifyContent: "center",
                }}
              >
                {getStringStart()}
               
              </Text>
              
            </TouchableOpacity>
            <View style={styles.icon,{borderLeftWidth:2,borderLeftColor:'#ced4da', margin:5,paddingLeft:10}}>
            <Icon
              name="ios-calendar"
              color={colors.text}
              size={26}

              
            />
            </View>
            <DateTimePickerModal
              isVisible={isDOBVisible}
              mode="date"
              minDate={new Date()}
              onConfirm={handleDOBConfirm}
              onCancel={hideDOBPicker}
              style={{
                backgroundColor: colors.background,
                borderColor: "transparent",
                color: colors.text,
                width: "100%",

                justifyContent: "center",
              }}
              date={DOB} // Initial date from state
            />
            
              </View>

                </View>
              {error.DOB==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500} style={{alignItems:'flex-end',marginLeft:15}}>
                <Text style={styles.errorMsg}>{error.DOB}</Text>
              </Animatable.View>
            )}

        {/* Coach */}
          <Text
            style={[
              styles.text_footer,
              {
              //  marginTop: 15,
              },
            ]}
          >
            Role*
          </Text>
          <View style={styles.action}>
          <FontAwesome
             style={styles.icon}
              name="user"
              color={colors.text}
              size={20}
            />
          <View style={{ padding: Platform.OS === 'ios' ? 10 : 0 ,
            
            height:40, width: "75%" , borderWidth: 1,
       borderColor:'#ced4da',
       borderWidth:1,
       borderRadius: 10,}}>
              <RNPickerSelect
                onValueChange={(value) => {
                  if (value != 0) {
                    setData({
                      ...data,
                      Role: value,
                      check_Role: true,
                      error_Role: true,
                    });
                  }
                }}
                placeholder={{ label: "Select Role", value: "0" }}
                items={roles}
              />
            </View>
            {data.check_Role ? (
              <Animatable.View animation="bounceIn">
              <FontAwesome name="check-circle" color="green" size={20} style={styles.icon}/>
            </Animatable.View>
          ) : (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon}/>
            </Animatable.View>
          )}
          </View>
          {data.error_Role ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Role is Required.</Text>
            </Animatable.View>
          )}

           {/* Gender */}
           <Text
            style={[
              styles.text_footer,
              {
               // marginTop: 15,
              },
            ]}
          >
            Gender*
          </Text>
          <View style={styles.action}>

          <FontAwesome
             style={styles.icon}
              name="user"
              color={colors.text}
              size={20}
            />
            <View style={{ width: "40%" }}>
              <TouchableOpacity
                onPress={() => setGender(true)}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#76b729",
                    flexDirection: "row",
                  },
                ]}
              >
                {gender == true ? (
                  <Feather
                    style={{ padding: 5 }}
                    name="disc"
                    color="#2196f3"
                    size={20}
                  />
                ) : (
                  <Feather
                    style={{ padding: 5 }}
                    name="circle"
                    color="#007bff;"
                    size={20}
                  />
                )}
                <Text style={[styles.textSign, { color: colors.text }]}>
                  Male
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "40%" }}>
              <TouchableOpacity
                onPress={() => setGender(false)}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#76b729",
                    flexDirection: "row",
                  },
                ]}
              >
                {gender == true ? (
                  <Feather
                    style={{ padding: 5 }}
                    name="circle"
                    color="#007bff;"
                    size={20}
                  />
                ) : (
                  <Feather
                    style={{ padding: 5 }}
                    name="disc"
                    color="#2196f3"
                    size={20}
                  />
                )}
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: colors.text,
                    },
                  ]}
                >
                  Female
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    
  
{/* Profile Picture */}
<Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Upload Pic
          </Text>

            <View style={ [styles.action, {justifyContent: 'space-between', alignItems:'center'} ]}>


               <Image  style={{     height: 80, width: 80, borderRadius: 40, }} 
                source={imageObject? { uri: imageObject.path} : demoProfile}
              
                /> 

                <TouchableOpacity 
                onPress={() => imageUploadHandler()}
                    style={{borderColor: '#76b729', borderRadius: 10, width: '30%',    borderWidth:1,    justifyContent: 'center',
                    alignItems: 'center',}}
                >
                    <Text style={{color: '#76b729', margin:10}}> Select</Text>

                </TouchableOpacity>

              

            
          
          
            </View>
            {error.pic==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}  >
                <Text style={styles.errorMsg}>{error.pic}</Text>
              </Animatable.View>
            )}

 {/* Street */}

 <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Street*
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="home"
              color={colors.text}
              size={20}
            />
            <TextInput
           //   placeholder="Street"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => streetSet(val)}
            />
            {data.check_Street ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            ) }
          </View>
          { error.Street==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{error.Street}</Text>
              </Animatable.View>
            )}
          {/* House */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            House Number*
          </Text>
          <View style={styles.action}>
            <FontAwesome
               style={styles.icon}
              name="home"
              color={colors.text}
              size={20}
            />
            <TextInput
          //    placeholder="House Number"
              style={styles.textInput}
              keyboardType="numeric"
              autoCapitalize="none"
              onChangeText={(val) => HouseNumberSet(val)}
            />

{data.check_HouseNumber ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            ) }
            
          </View>
          { error.House==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{error.House}</Text>
              </Animatable.View>
            ) }
          {/* Zip */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Zip*
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="home"
              color={colors.text}
              size={20}
            />
            <TextInput
             // placeholder="Zip"
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="numeric"
              onChangeText={(val) => PostalCodeSet(val)}
            />
            {data.check_PostalCode ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            ) }
            
          
          </View>
          
          { error.Zip==="" ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>{error.Zip}</Text>
              </Animatable.View>
            )}
          {/* Country */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Country*
          </Text>
          <View style={styles.action}>
            <FontAwesome
               style={styles.icon}
              name="flag"
              color={colors.text}
              size={20}
            />

            <View style={{ padding: Platform.OS === 'ios' ? 10 : 0 ,
            
            height:40, width: "75%" , borderWidth: 1,
       borderColor:'#ced4da',
       borderWidth:1,
       borderRadius: 10,}}>
              <RNPickerSelect    
                onValueChange={(value) => {
                  if (value != 0) {
                    setData({
                      ...data,
                      Country: value,
                      check_Country: true,
                      error_Country: true,
                    });
                  }

                  _fetchAllStates(value);
                }}
                placeholder={{ label: "Select Country", value: "0" }}
                items={countires}
              />
            </View>
            {data.check_Country ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="transparent" size={20} style={styles.icon} />
              </Animatable.View>
            ) }
             
          </View>
          {data.error_Country ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Country is Required.</Text>
            </Animatable.View>
          )}
          {/* state */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            States
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="flag"
              color={colors.text}
              size={20}
            />

<View style={{ padding: Platform.OS === 'ios' ? 10 : 0 ,
            
            height:40, width: "75%" , borderWidth: 1,
       borderColor:'#ced4da',
       borderWidth:1,
       borderRadius: 10,}}>
              <RNPickerSelect
                onValueChange={(value) => {
                  if (value != 0) {
                    setData({
                      ...data,
                      State: value,
                      check_State: true,
                      error_State: true,
                    });
                  }
                  _fetchAllCties(value);
                }}
                placeholder={{ label: "Select State", value: "0" }}
                items={states}
              />
            </View>
            {data.check_State ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon}/>
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon}/>
              </Animatable.View>
            )}
          </View>
          {data.error_State ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>State is Required.</Text>
            </Animatable.View>
          )}
          {/* City */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            City
          </Text>
          <View style={styles.action}>
            <FontAwesome
           style={styles.icon}
              name="home"
              color={colors.text}
              size={20}
            />
            <View style={{ padding: Platform.OS === 'ios' ? 10 : 0 ,
            
            height:40, width: "75%" , borderWidth: 1,
       borderColor:'#ced4da',
       borderWidth:1,
       borderRadius: 10,}}>
              <RNPickerSelect
                onValueChange={(value) => {
                  if (value != 0) {
                    setData({
                      ...data,
                      City: value,
                      check_City: true,
                      error_City: true,
                    });
                  }
                }}
                placeholder={{ label: "Select City", value: "0" }}
                items={cities}
              />
            </View>
            {data.check_City ? (
                 <Animatable.View animation="bounceIn">
                 <FontAwesome name="check-circle" color="green" size={20} style={styles.icon}/>
               </Animatable.View>
             ) : (
               <Animatable.View animation="bounceIn">
                 <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon}/>
               </Animatable.View>
             )}
          </View>
          {data.error_City ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>City is Required.</Text>
            </Animatable.View>
          )}

          {/* username */}

   <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Username*
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon}
              name="user"
              color={colors.text}
              size={20}
            />
            <TextInput
           //   placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => mailSet(val)}
            />
            {data.check_MailChange ? (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
              </Animatable.View>
            ) : (
              <Animatable.View animation="bounceIn">
                <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon}/>
              </Animatable.View>
            )}
          </View>
          {data.error_UserName ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>User Name Required.</Text>
            </Animatable.View>
          )}

       

          {/* Email */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Email*
          </Text>
          <View style={styles.action}>
            <FontAwesome
             style={styles.icon}
              name="envelope"
              color={colors.text}
              size={20}
            />
            <TextInput
           //   placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => emailSet(val)}
            />
            {data.check_Email ? (
             <Animatable.View animation="bounceIn">
             <FontAwesome name="check-circle" color="green" size={20} style={styles.icon} />
           </Animatable.View>
         ) : (
           <Animatable.View animation="bounceIn">
             <FontAwesome name="check-circle" color="transparent" size={20} style={styles.icon}/>
           </Animatable.View>
         )}
          </View>
          {data.error_Email ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Email Required.</Text>
            </Animatable.View>
          )}

       
          {/* Password */}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Password*
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon,{margin:15}}
              name="lock"
              color={colors.text}
              size={20}
            />
            <TextInput
            //  placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="black" size={20}  style={styles.icon}/>
              ) : (
                <Feather name="eye" color="black" size={20}  style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
          {data.error_Password ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password cannot be empty.</Text>
            </Animatable.View>
          )}
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
               
              },
            ]}
          >
            Confirm Password*
          </Text>
          <View style={styles.action}>
            <FontAwesome
              style={styles.icon,{margin:15}}
              name="lock"
              color={colors.text}
              size={20}
            />
            <TextInput
             // placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="black" size={20}  style={styles.icon} />
              ) : (
                <Feather name="eye" color="black" size={20}  style={styles.icon}/>
              )}
            </TouchableOpacity>
          </View>
          {data.error_ConfrimPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Confrim Password cannot be empty.
              </Text>
            </Animatable.View>
          )}
          {data.confirmIsValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          {data.isMatchPassword ?    null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password Not Match.</Text>
            </Animatable.View>
          )}
          {data.isRequired==true ?(    
          <Animatable.View animation="fadeInLeft" duration={500} style={{paddingTop:20}}>
              <Text style={styles.errorMsg}>*Fields are required</Text>
            </Animatable.View> ):null  
 }
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>


            <TouchableOpacity
              style={styles.signIn}
              onPress={() => RegisterHandle()}
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
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
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
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        </KeyboardAwareScrollView>
      </Animatable.View>
    </View>
 
  );
};

//make this component available to the app
export default MobileSignup;
