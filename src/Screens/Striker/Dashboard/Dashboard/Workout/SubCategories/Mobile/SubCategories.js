//import liraries
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacityBase,
} from "react-native";

//animation
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
//Styles
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
//API
import axios from "axios";
import { API_GET_PLANNER_SUBCATEGORIES } from "../../../../../../../api/urls";

//Redux
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
// Navigation

//import liraries
import { useNavigation, useRoute } from "@react-navigation/native";
import NavigationStrings from "../../../../../../../Constants/NavigationStrings";
import { _fetchSubCategories,_addUserLocations, createAppointmentSchedular } from "../../../../../../../api/InvokeApi";
import RNLocation from 'react-native-location';
 
RNLocation.configure({

  desiredAccuracy: {
    ios: "bestForNavigation",
    android: "highAccuracy"
  },
  // Android only
  androidProvider: "auto",
  interval: 50000, // Milliseconds

  // iOS Only
  activityType: "other",
  allowsBackgroundLocationUpdates: false,
  headingFilter: 1, // Degrees
  headingOrientation: "portrait",
  pausesLocationUpdatesAutomatically: false,
  showsBackgroundLocationIndicator: false,
})

// create a component
const SubCategories = () => {
  const [gico, setGico] = useState(true);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);
  const [start, setStart] = useState(false);
  const [startDateTime, setStartDateTime] = useState(false);
  const [endDateTime, setEndDateTime] = useState(false);
  const [title, setTitle] = useState('');
  
  const route = useRoute();
  const navigation = useNavigation();
  //States
  const [Data, setData] = useState([]);
  //redux
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
 
const requestBody = {
  loggedUser: {
    username: user.userName,
    userId:user.userId,
    sessiontoken: user.sessionToken,
  },
};

const getLocation = async () => {
    
  let permission = await RNLocation.checkPermission({
    ios: 'always', // or 'always'
    android: {
      detail: 'fine' // or 'fine'
    }
  });


  let location;
 

    permission = await RNLocation.requestPermission({
      ios: "always",
      android: {
        detail: "fine",
        rationale: {
          title: "We need to access your location",
          message: "We use your location to show where you are on the map",
          buttonPositive: "OK",
          buttonNegative: "Cancel"
        }
      }
    })
   

     location = await RNLocation.getLatestLocation({timeout: 100})
     
     
    
     const LocationObject = {
      latitude: location.latitude, 
      longitude: location.longitude, 
      
  };
 
  var res = _addUserLocations(requestBody.loggedUser, LocationObject);
  
 // console.log(requestBody.loggedUser)
   
}

  //Component Did Mount
  useEffect(() => {
    _fetchSubCategoriesFUNC();
  }, []);
  const _CreateTask = async () => {
    setStartDateTime(new Date())
if(start==true){
 
  
  const finalCreateExerciseObject = {
    title: 'LIVE PRATICE '+ title, 
    description: '', 
    startdate: startDateTime,
    enddate: new Date(),
    allday: false,
    repeat: false,
    opentask:false,
    locationid:1,
    type: 'G',
    excerciselist: [],
    username: requestBody.loggedUser.username,
};

console.log(finalCreateExerciseObject)

var res = createAppointmentSchedular(requestBody.loggedUser, finalCreateExerciseObject);
 
setStart(false)
}else
   setStart(true);


   getLocation();
  };
  const _fetchAthletics = async () => {
    //navigation.navigate(NavigationStrings.STRIKER_ATHELTIC_STACK);
  };

  // Fetching Data from API
  const _fetchSubCategoriesFUNC = async () => {
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
      parentid: "1",
    };

    //const response = await _fetchSubCategories(requestBody.loggedUser,requestBody.parentid)

    try {
      const response = await axios.post(API_GET_PLANNER_SUBCATEGORIES, {
        loggeduser: requestBody.loggedUser,
        parrentid: requestBody.parentid,
      });
      let temp = response.data;
      let arrayCheck = [];
      temp.map((obj) => {
        (obj.isChecked = false),
          (obj.name = obj.name),
          (obj.id = obj.id),
          (obj.parentid = obj.parentid);

        arrayCheck.push(obj);
      });
      setData(arrayCheck);
  //   console.log(Data);
    } catch (error) {
      alert(error);
    }
  };

  const renderSubCategory = ({ item }) => {
    <TouchableOpacity style={styles.boxContainer}>
      <Text>{item.name}</Text>
    </TouchableOpacity>;
  };
  renderExercises = ({ item, index }) => {
    return (
      <View
      style={{
        marginTop: 8,
        width: "20%",
        height: 16,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 6,
        shadowColor: "#000",
shadowOffset: {
width: 0,
height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(122,181,29,.25)",
          padding: 2,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
          //borderTopLeftRadius: 13,
        }}
      >
        <TouchableOpacity
          onPress={() =>{
           

            let array = [...Data];
if( array[index].isChecked==true)
array[index].isChecked=false;
else
            array[index].isChecked = true;

           setTitle(item.name)

            setData(array);
          }}
        >
          <Text style={{ fontSize: 10 }}>{item.name} {item.isChecked==true? <Animatable.View animation="bounceIn">
            <Feather name="check" color="#000000" size={12} />
          </Animatable.View>:null}</Text>
          
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity
        onPress={() =>
          navigation.navigate(NavigationStrings.GOLF_EXERCISES, {
            obj: item,
          })
        }
      >
        <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 100,
          }}
          source={{ uri: item.picture }}
        ></Image>  
      </TouchableOpacity> */}
    </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxContainerRow}>
        <TouchableOpacity //onPress={() => _fetchGolf()}
        >
          <View style={styles.title_box1}>
            <View style={{ height: "80%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>G</Text>
            </View>
            <View style={{ height: "20%" }}>
              {gico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome name="check-square-o" color="#fff" size={10} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _fetchAthletics()}>
          <View style={styles.title_box2}>
            <View style={{ height: "80%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "20%" }}>
              {aico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :  <FontAwesome name="lock" color="transparent" size={10} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchN()}
        >
          <View style={styles.title_box3}>
            <View style={{ height: "80%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>N</Text>
            </View>
            <View style={{ height: "20%" }}>
              {nico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :  <FontAwesome name="lock" color="transparent" size={20} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchM()}
        >
          <View style={styles.title_box4}>
            <View style={{ height: "80%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>M</Text>
            </View>
            <View style={{ height: "20%" }}>
              {mico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :  <FontAwesome name="lock" color="transparent" size={20} />}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity //onPress={() => _fetchP()}
        >
          <View style={styles.box_oprntask}>
            <View style={{ height: "80%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>P</Text>
            </View>
            <View style={{ height: "20%" }}>
              {pico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :  <FontAwesome name="lock" color="transparent" size={20} />}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      

      <FlatList
        columnWrapperStyle={{ justifyContent: "space-around" }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        numColumns={4}
        data={Data}
        keyExtractor={(item) => item.id}
        
          renderItem={renderExercises}
      />




<TouchableOpacity
     
            onPress={() => _CreateTask()}
            style={
            
              {
                backgroundColor:  "#76b729",
                borderColor: "#fff",
                borderWidth: 1,
              //  marginTop: 15,
               // marginBottom: 25,
               width:"30%",
               alignSelf:'center',
               borderRadius:6

              }
            }
          >

{start==false?
            <Text
              style={
              
                {alignSelf:'center',
                padding:1,
                  color: "#fff",
                }
              }
            >
              START{" "}
            </Text>:
            <Text
              style={
              
                {alignSelf:'center',
                padding:1,
                  color: "#fff",
                }
              }
            >
              STOP{" "}
            </Text>}
          </TouchableOpacity>
    </View>
  );
};

//make this component available to the app
export default SubCategories;
