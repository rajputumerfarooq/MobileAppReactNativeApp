//import liraries
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image,ScrollView } from "react-native";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from '@react-native-community/checkbox';
//Styles
import styles from "./styles";
//API
import axios from "axios";
import { API_GET_PLANNER_EXERCISES } from "../../../../../../api/urls";
import { _fetchSubCategories } from "../../../../../../api/InvokeApi";
//Redux
import { useSelector } from "react-redux";
//Navigations
import NavigationStrings from "../../../../../../Constants/NavigationStrings";
// Third Party Libraries
import Video from 'react-native-video';




// create a component
const ExerciseDetails = () => {
  //Navigation
  const route = useRoute();
  const navigation = useNavigation();



  //States
  const [prevdata, setprevData] = useState();

  useEffect(() => {
    setprevData(route.params.obj)
    console.log(route.params.obj.video)
  }, []);





  return (
    <View style={styles.container}>

      {/* First Part of Screen */}
      <View style={{flexDirection:'row', alignItems:'flex-start', flex:.09}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10, marginLeft: 30 }}
        >
          <Ionicons name="arrow-back-sharp" size={35} />
        </TouchableOpacity>
      </View>


      <View style={{ flex:.76, backgroundColor:'white' , width:'100%'}}> 

        <View style={{ flexDirection:'row', width:'100%', alignItems:'center',justifyContent:'flex-start'}}>


            <Text style={{ fontSize: 17, fontWeight:'600'}}>
            {route.params.obj.name}
            </Text>


           
        </View>

        <Text style={{ fontSize: 17, fontWeight:'600' ,marginTop:15}}>
            Description:
        </Text>

        <ScrollView>

            <Text>{route.params.obj.description} </Text>
            <Video
            resizeMode={"contain"}
            source={{uri: route.params.obj.video}}
            style={{width: '100%', height:300, backgroundColor:'#000', }}
            controls={true}
            />
         
        </ScrollView>
        
 

      </View>
      
      <View style={{ flex:.15, }}>

        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>

      </View>

      </View>


    </View>
  );
};

//make this component available to the app
export default ExerciseDetails;
