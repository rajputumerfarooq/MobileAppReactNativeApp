//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
//UI
import { Searchbar } from "react-native-paper";
//Styles
import styles from "./styles";
//API
import axios from "axios";
import { getStrikers,getCoaches } from "../../../../api/InvokeApi";
import { FlatList } from "react-native-gesture-handler";
//Components
import {userItem} from "../Components/userItem";
//redux
import { useSelector } from 'react-redux';
//Demo Picture
import demoProfile from '../../../../assets/demoProfile.png'
import { API_GET_STRIKERS,API_GET_COACHES } from "../../../../api/urls";
 




// create a component
const Contact = () => {

  const [filteredData, setFilteredData]= useState();
  const [masterData, setMasterData]= useState([]);
  const [search, setSearch] = useState("")

  const { user } = useSelector(state => {
    return {
      user: state.userReducer.user
    }
  })



  // API CALLS
  const _FetchUsers = async () => {
    let apiEndPoint = ""
   
    if (user.roleName.toUpperCase() == "COACH"){

      apiEndPoint = API_GET_STRIKERS
    }
    else {
      apiEndPoint = API_GET_COACHES
    }

    
    try {
      const reqBody = {loggeduser: {username: user.userName, sessiontoken: user.sessionToken}, id: user.userId.toString() } 
      const response = await axios.post(apiEndPoint, 
      reqBody);

      setMasterData(response.data)
      setFilteredData(response.data)

    } catch (error) {
      alert(error)
        
    }

  };


  useEffect( ()=>{
  _FetchUsers()
  },[]);

  //Render User Items for FLATLIST
 const renderUsers = ({item}) => {
          return(

            <TouchableOpacity >
            <View style={styles.boxContainerOne}>
                <Image
                    style={styles.image}
                    source={demoProfile}
                />
                <View style={styles.info}>
                    <Text style={styles.text}>
                        {item.firstName} {item.lastName} 
                    </Text>
                    <Text style={styles.smallText}>{item.email}</Text>
                </View>
            </View>
          </TouchableOpacity>
          );
  }

const searchFilter = (text) => {

  if (text) {
    const newData = masterData.filter( (item)=>{
      const itemData = item.firstName? item.firstName.toUpperCase() : ''.toUpperCase()
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    } );
    setFilteredData(newData)
    setSearch(text)
  }
  else{
    setFilteredData(masterData)
    setSearch(text)

  }
}

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{flex: .10 }}>
      {/* <Searchbar
        placeholder="Search"
        onChangeText={ (text) => {searchFilter(text)}}
        value={search}
        style={styles.searchBar}
      /> */}
    </View>


    <View style={{flex:.90,  width:'100%' }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={renderUsers}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={() => {
        //   return <View style={styles.separator} />;
        // }}
      />

    </View>

    </View>

  );
};

//make this component available to the app
export default Contact;
