//import liraries
import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
// Third Party Libraries
import ProgressCircle from "react-native-progress-circle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// Styles
import styles from "./styles";
import colors from "../../../../Constants/Colors";
//Components
import StrikerComponent from "../Components/StrikerComponent";
import TeamsComponent from "../Components/TeamsComponent";
//redux
import { useSelector } from "react-redux";
//API
import { getConnectedUsers, getConnectedTeams, getConnectedTeamMembers} from "../API/invokeApi";
import axios from "axios";
//Images
import image_1 from "../../../../assets/ProfilePic/1.png";
import image_2 from "../../../../assets/ProfilePic/2.jpg";
import image_3 from "../../../../assets/ProfilePic/3.jpg";
import image_4 from "../../../../assets/ProfilePic/4.jpg";
import image_5 from "../../../../assets/ProfilePic/5.jpg";

import image_6 from "../../../../assets/ProfilePic/6.jpg";
import image_7 from "../../../../assets/ProfilePic/7.jpg";
import image_8 from "../../../../assets/ProfilePic/8.jpg";
import image_9 from "../../../../assets/ProfilePic/9.jpg";
import image_10 from "../../../../assets/ProfilePic/10.jpg";

import image_11 from "../../../../assets/ProfilePic/11.jpg";
import image_12 from "../../../../assets/ProfilePic/12.jpg";
import image_13 from "../../../../assets/ProfilePic/13.jpg";
import image_14 from "../../../../assets/ProfilePic/14.jpg";
import image_15 from "../../../../assets/ProfilePic/15.jpg";
import { API_ALL_APPOINTMENT_FOR_SCHEDULAR_URL, API_GET_CONNECTED_USERS,API_GET_CONNECTED_USERS_IMAGES } from "../../../../api/urls";

// Charts Imports


// create a component
const CoachDashboard = () => {


  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  //States
  const [connectedUsers, setConnectedUsers] = useState([]); // State to save the fetched ConnectedUsers from Api
  const [connectedTeams, setConnectedTeams] = useState([]); // State to save the fetched ConnectedTeamsfrom Api
  const [Type, setType] = useState(true) // State to Determine whether we have to show All Connected users or Teams.... True for ALL and false for TEAMS

  const [showSearch, setShowSearch] = useState(false) // State to Determine whether we have to show Search box

  const loggedUser = {
    username: user.userName,
    userId:user.userId,
    sessiontoken: user.sessionToken,
  };





  // API Call to fetch Connected Users
  const _fetchAllConnectedUsers = async () => {
    
   //const response = await getConnectedUsers(loggedUser);
   const response = await axios.post(API_GET_CONNECTED_USERS, {
    loggeduser: loggedUser
  });

  //return response;
  for (let i = 0; i < response.data.length; i++) { 
           
    
    const img = await axios.post(API_GET_CONNECTED_USERS_IMAGES, {
      fileName: response.data[i].picture,  
    });
   response.data[i].picture=img.data; 
    response.data[i]["Wagr"] = Math.floor(Math.random() * 999);
//console.log('//-----------------------------------------------------------------------',response.data[i])
    }

  

    setConnectedUsers(response.data)

  };


    
  

  // API Call to fetch Connected Teams
  const _fetchAllConnectedTeams = async () => {
    
    const response = await axios.post(API_ALL_APPOINTMENT_FOR_SCHEDULAR_URL, {
      loggeduser: loggedUser,
     
    });

    // const response = await getConnectedTeams(loggedUser, user.userId);

    setConnectedTeams(response.data)
    console.log(connectedTeams);
 
  };

  useEffect(() => {

    _fetchAllConnectedTeams();
    _fetchAllConnectedUsers();
  }, [user]);



  return (
    <SafeAreaView style={styles.container}>
     

      <View style={{ width: "96%", alignItems: "center",borderWidth:1,margin:5,borderTopStartRadius:10,borderTopEndRadius:10,borderColor:'rgba(0, 0, 0, 0.125)' }}>
        <View style={[styles.boxHeader,{ backgroundColor: 'rgba(122, 181, 29, 0.25)',  width:'100%' ,height:30          }]}></View>
        <Text style={[styles.text,{paddingTop:10}]} >ATHLETES DASHBOARD</Text>

        <View
          // ALL AND TEAMS BUTTONS
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            alignSelf: "center",
          }}
        >
            
          <TouchableOpacity
            onPress={() => {
                setType(true)
            }}
          >
            <View>
              <View style={[styles.header,{borderTopLeftRadius:5,borderBottomStartRadius:5}]}>
                <Icon name="list-outline" color="#000000" size={20}></Icon>
                <Text style={{paddingLeft:10}}>All</Text>
              </View>
            </View>
          </TouchableOpacity>



          <TouchableOpacity onPress={() =>  setType(false)}>
            <View>
              <View style={[styles.header,{ borderLeftWidth:0,borderRightWidth:0}]}>
                <FontAwesome name="users" color="#000000" size={21} />
                <Text style={{paddingLeft:10}}>Teams</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>  {
            if(showSearch==true)
            setShowSearch(false)
            else
            setShowSearch(true)}}>
            <View>
              <View style={[styles.header,{borderTopRightRadius:5,borderBottomEndRadius:5}]}>
              <FontAwesome name="search" color="#000000" size={21} />
                <Text style={{paddingLeft:10}}>Search</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      


{showSearch?

        <View
          style={styles.action}
          // SearchBar
        >
          <FontAwesome name="search" color="#000000" size={25} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            //value={query}
            //  onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{
              backgroundColor: colors.background,
              paddingHorizontal: 30,
                width: '80%',
            
                
            }}
          />
        </View>
:null
}
        {Type ? 
            <StrikerComponent data={connectedUsers} /> :
            <TeamsComponent data={connectedTeams}/>
        }

    



      </View>

  

    </SafeAreaView>
  );
};

//make this component available to the app
export default CoachDashboard;
