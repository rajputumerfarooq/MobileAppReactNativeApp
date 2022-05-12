//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
//UI
import { Searchbar } from "react-native-paper";
//Styles
import styles from "./styles";
//API
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";
//Components
import { userItem } from "../Components/userItem";
//redux
import { useSelector } from "react-redux";
//Demo Picture
import demoProfile from "../../../../assets/demoProfile.png";
import { API_GET_COACHES,API_GET_STRIKERS } from "../../../../api/urls";
const icon = require('../../../../assets/demoProfile.png')
// create a component
const AddNewContact = () => {
  const [filteredData, setFilteredData] = useState();
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");

  //Buttons
  const [buttonText, setButtonText] = useState("")
  

  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  // API CALLS
  const _FetchUsers = async () => {
    let apiEndPoint = "";

    if (user.roleName.toString().toUpperCase() == "COACH") {
      apiEndPoint =API_GET_STRIKERS
       ;
    } else {
      apiEndPoint =
      API_GET_COACHES;
    }

    try {
      const reqBody = {
        loggeduser: {
          username: user.userName,
          sessiontoken: user.sessionToken,
        },
        id: user.userId.toString(),
      };
      const response = await axios.post(apiEndPoint, reqBody);

      console.log(response.data)

      setMasterData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    _FetchUsers();
  }, []);

  const actionHandler = async(item, index) => {

    let apiEndpoint = ""
    let reqBody = ""
    let status = 0



    if (item.status == 0) {
        // for sending user add request
        apiEndpoint = "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/notifications/useraddrequest"
        reqBody = {
            loggeduser: {
              username: user.userName,
              sessiontoken: user.sessionToken,
            },
            userid: item.id,
            message:"",
            seen:"0",
            type:"user",
            status:"0",
            senderid:user.userId,
            teamid:""
          };
         
         status =2 
    }
    else if ( item.status == 2) {
        // for Cancelling user add request
        apiEndpoint = "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/notifications/canceluserrequest"
        reqBody = {
            loggeduser: {
                username: user.userName,
                sessiontoken: user.sessionToken,
            },
            userid: item.id,
            senderid:user.userId,
        };
        status = 0
   
    }



    let temp = [...masterData]

    temp[index].status=status



    // temp.map( (masterItem)=>{
    //     if (masterItem.id == item.id){
    //         masterItem.status = status
    //     }
    // })


  




    try {

        const response = await axios.post(apiEndpoint, reqBody);
        console.warn(reqBody) 
        console.warn(response) 

        setMasterData(temp)
        setFilteredData(temp)
      } catch (error) {
        alert(error);
      }








    }

  

  //Render User Items for FLATLIST
  const renderUsers = ({ item, index }) => {
    buttonColor= "#76b729"
    borderColor="#76b729"
    textColor="#fff"

    // setButtonText("");
    // let buttonColor=""
    // let textColor=""
    // let borderColor=""


    // if (item.status.toString() == "0") {
    //     setButtonText ( "Connect");
    //   buttonColor= "#76b729"
    //   borderColor="#000"
    //   textColor="black"

    // } else if (item.status == "1") {
    //     setButtonText("Dissconnect");
    //   buttonColor= "#fff"
    //   borderColor="#76b729"
    //   textColor="#76b729"


    // } else {
    //     setButtonText ("Cancel Request");
    //   buttonColor= "#76b729"
    //   borderColor="#000"
    //   textColor="black"

    // }

    return (
      <>
        <View style={styles.boxContainerTwo}>
          <View style={styles.boxFirstPart}>
            <Image style={styles.image} source={icon} />
            <View style={styles.info}>
              <Text style={styles.text}>
                {item.firstName} {item.lastName} 
              </Text>
              <Text style={styles.smallText}>{item.email}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => { actionHandler(item,index);}}
            key={item.id}
            style={[styles.boxSecondPart, { backgroundColor: buttonColor, borderColor:borderColor}]}
          >
            <Text> {item.status == 0 ?  "Connect": "Cancel Request" } </Text>

          </TouchableOpacity>
        </View>
      </>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.firstName
          ? item.firstName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => {
            searchFilter(text);
          }}
          value={search}
          style={styles.searchBar}
        />
      </View>

      <View style={{ flex: 0.9, width: "100%" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderUsers}
          keyExtractor={(item) => item.id}
          // ItemSeparatorComponent={() => {
          //   return <View style={styles.separator} />;
          // }}
        />
      </View>
    </View>
  );
};

//make this component available to the app
export default AddNewContact;
