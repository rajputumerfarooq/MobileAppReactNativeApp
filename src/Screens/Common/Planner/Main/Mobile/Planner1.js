import React, { useState, Component, useEffect, useRef,  } from "react";
import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";

import CheckBox from "@react-native-community/checkbox";
import {
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";


//icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import DatePicker from "react-native-datepicker";
import styles from "./styles";

import RNPickerSelect from "react-native-picker-select";
import { TouchableRipple, Switch } from "react-native-paper";

import LinearGradient from "react-native-linear-gradient";
import colors from "../../../../../assets/colors";
//import liraries
import { useNavigation, useRoute } from "@react-navigation/native";
import NavigationStrings from "../../../../../Constants/NavigationStrings";
import { set } from "react-native-reanimated";
//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AddAppointment } from "../../../../../Store/appointmentReducer/type";
import { EmptyExercises } from "../../../../../Store/ExerciseReducer/type";
import {
  createAppointmentSchedular,
  GetPlannerLocations,
} from "../../../../../api/InvokeApi";

export default function Planner1() {
  //States
  const [golfSelected, setGolSelected] = useState(true);
  const [athleticSelected, setAthleticSelected] = useState(false);
  const [title, setTitle] = useState("");
  const [checked, setChecked] = React.useState("first");
  const [allDay, setAllDay] = useState(false);
  const [openTask, setOpenTask] = useState(false);

  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const [locationValue, setLocationValue] = useState("None");
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isLocationPickerVisible, setLocationVisibility] = useState(false);
  const [locations, setLocations] = useState([]);
  const [selectedExcercise, setSelectedExcercise] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const focus = useIsFocused();

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };
  const showLocationPicker = () => {
    setLocationVisibility(true);
  };
  const showRepeatPicker = () => {
    setRepeatVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartConfirm = (date) => {
    setStartDate(date);
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndConfirm = (date) => {
    setEndDate(date);
    hideEndDatePicker();
  };

  const getStringStart = () => {
    var day = startDate.getDate();

    var year = startDate.getFullYear();
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




    // Hours part from the timestamp
    var hours = startDate.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + startDate.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ":" + minutes.substr(-2);
    var monthIndex = startDate.getMonth();

    return (
      day + " " + monthNames[monthIndex] + " " + year + "   " + formattedTime
    );
  };

  const getStringEnd = () => {
    var day = endDate.getDate();

    var year = endDate.getFullYear();
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

    // Hours part from the timestamp
    var hours = endDate.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + endDate.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ":" + minutes.substr(-2);
    var monthIndex = endDate.getMonth();

    return (
      day + " " + monthNames[monthIndex] + " " + year + "   " + formattedTime
    );
  };


    //redux
    const { user } = useSelector((state) => {
      return {
        user: state.userReducer.user,
      };
    });
//redux
  
const { selecteduser } = useSelector((state) => {
  return {
    selecteduser: state.SelectedUserReducer.selecteduser,
  };
});
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
    };

  const _fetchAllLocation = async () => {
    const response = await GetPlannerLocations(requestBody.loggedUser);
    const temp = [];

    for (i = 0; i < response.data.length; i++) {
      temp.push({
        label: response.data[i].name,
        value: response.data[i].id,
      });
    }

    setLocations(temp);
  };

  const _CreateTask = async () => {

    if (title == "") {
      Alert.alert("title Required. ");
      return;
    } else {
      const appointment = {
        title: title,
        description: "",
        startdate: startDate,
        enddate: endDate,
        allday: allDay,
        repeat: "0",
        opentask: openTask,
        locationid: locationValue,
        type: golfSelected == true ? "G" : "A",
        excerciselist: selectedExcercise,
        username:selecteduser==undefined? requestBody.loggedUser.username:selecteduser.userName,
      };


    //  console.log("12222222222222222222222")
     console.log(appointment)

      dispatch({ type: AddAppointment, payload: appointment });

      if (golfSelected == true) {
        navigation.navigate(NavigationStrings.STRIKER_GOLF_STACK, {
          appointment: appointment,
        });
      } else {
        navigation.navigate(NavigationStrings.STRIKER_ATHELTIC_STACK, {
          appointment: appointment,
        });
      }
    }

    
  };

  useEffect( () =>{
    _fetchAllLocation();
    setTitle("");
  
    setAllDay(false)
    setOpenTask(false)
  },[focus])
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}
    style={{backgroundColor:'white'}}
    showsVerticalScrollIndicator={false}
    >

<View style={styles.boxContainerRow}>
        <TouchableOpacity 

          onPress={() => {
            setAthleticSelected(false);
            setGolSelected(true);
          }}
        >
          <View style={styles.title_box1}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>G</Text>
            </View>
            <View style={{ height: "30%" }}>
            {golfSelected ? (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-square-o" color="#fff" size={20} />
            </Animatable.View>
          ) : 
        
        <Animatable.View animation="bounceIn">
          <FontAwesome name="check-square-o" color={colors.primary} size={20} />
        </Animatable.View>}
            </View>
          </View>
        </TouchableOpacity>





        <TouchableOpacity 
                  onPress={() => {
                    setGolSelected(false);
                    setAthleticSelected(true);
                  }}
                  >
          <View style={styles.title_box2}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "30%" }}>
            {athleticSelected ? (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-square-o" color="#fff" size={20} />
            </Animatable.View>
          ) : 
          <Animatable.View animation="bounceIn">
          <FontAwesome name="check-square-o" color={colors.fourth_primary} size={20} />
        </Animatable.View>}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchN()}
        >
          <View style={styles.title_box3}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>N</Text>
            </View>
            <View style={{ height: "30%" }}>

              <FontAwesome name="lock" color="#fff" size={20} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchM()}
        >
          <View style={styles.title_box4}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>M</Text>
            </View>
            <View style={{ height: "30%" }}>
             <FontAwesome name="lock" color="#fff" size={20} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity //onPress={() => _fetchP()}
        >
          <View style={styles.box_oprntask}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>P</Text>
            </View>
            <View style={{ height: "30%" }}>
  <FontAwesome name="lock" color="#fff" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* <KeyboardAvoidingView
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          padding:3,
          height: 90,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.gExerciseSelectorBox]}
          onPress={() => {
            setAthleticSelected(false);
            setGolSelected(true);
          }}
        >
          <Text style={styles.title_text}> G </Text>
          {golfSelected ? (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-square-o" color="#fff" size={20} />
            </Animatable.View>
          ) : 
        
        <Animatable.View animation="bounceIn">
          <FontAwesome name="check-square-o" color={colors.primary} size={20} />
        </Animatable.View>}

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aExerciseSelectorBox}
          onPress={() => {
            setGolSelected(false);
            setAthleticSelected(true);
          }}
        >
          <Text style={styles.title_text}> A </Text>
          {athleticSelected ? (
            <Animatable.View animation="bounceIn">
              <FontAwesome name="check-square-o" color="#fff" size={20} />
            </Animatable.View>
          ) : 
          <Animatable.View animation="bounceIn">
          <FontAwesome name="check-square-o" color={colors.fourth_primary} size={20} />
        </Animatable.View>}



        </TouchableOpacity>

        <TouchableOpacity style={styles.nExerciseSelectorBox}>
          <Text style={styles.title_text}> N </Text>

          <FontAwesome name="lock" color="#fff" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.mExerciseSelectorBox}>
          <Text style={styles.title_text}> M </Text>
          <FontAwesome name="lock" color="#fff" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pExerciseSelectorBox}>
          <Text style={styles.title_text}> P </Text>
          <FontAwesome name="lock" color="#fff" size={20} />
        </TouchableOpacity>
      </KeyboardAvoidingView> */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.boxfull}>
          <View style={styles.boxInsidefull}>
            <View style={styles.boxHeader}>
              <Text style={styles.textHeader}> TITLE FOR TASK </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                boxfull: {
                    padding: 4,
                    borderRadius: 10,
              
                    alignItems: "center",
              
                    height: Platform.OS === "android" ? 130 : 130,
                    width:
                      Platform.OS === "android"
                        ? Dimensions.get("window").width - 22
                        : Dimensions.get("window").width - 22,
                    marginBottom:
                      (Dimensions.get("window").width -
                        (Dimensions.get("window").width - 10)) /
                      3,
              
                    backgroundColor: "#fff",
                    borderColor: "#000000",
                    borderWidth: 1,
                    margin: 4,
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    shadowOffset: {
                      height: 10,
                      width: 10,
                    },
                  },
            
                  boxInsidefull: {
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "rgba(122, 181, 29, 0.25)",
                    height: Platform.OS === "android" ? 120: 120,
                  },
            
              }}
            >
              <View style={{ alignItems: "flex-start" }}>
                <Text style={{ fontSize: 15 }}> Title:</Text>
                <TextInput
                  onChangeText={setTitle}
                  value={title}
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    width: "100%",
                    padding: 10,
                    borderRadius: 10,
                  }}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>




       
        <View style={styles.boxfulltime}>
          <View style={styles.boxInsidefulltime}>
            <View style={styles.boxHeader}>
              <Text style={styles.textHeader}> Date </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                alignItems:'center'
              }}
            >
              <View style={{ alignItems: "flex-start" }}>


              <View>
              <Text style={styles.Label}>START DATE & TIME </Text>
              <View style={styles.action}>
                <Icon
                  name="ios-calendar"
                  color={colors.text}
                  size={26}
                  style={{ width: "10%" }}
                />
                <TouchableOpacity
                  onPress={showStartDatePicker}
                  style={styles.dropdownDate}
                >
                  <Text style={styles.textdatedropdown}>
                    {getStringStart()}
                  </Text>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isStartDatePickerVisible}
                  mode="datetime"
                  minDate={new Date()}
                  onConfirm={handleStartConfirm}
                  onCancel={hideStartDatePicker}
                  style={styles.textdatemodel}
                  date={startDate} // Initial date from state
                />
              </View>
              <Text style={styles.Label}>END DATE & TIME</Text>
              <View style={styles.action}>
                <Icon
                  name="ios-calendar"
                  color={colors.text}
                  size={26}
                  style={{ width: "10%" }}
                />
                <TouchableOpacity
                  onPress={showEndDatePicker}
                  style={styles.dropdownDate}
                >
                  <Text style={styles.textdatedropdown}>{getStringEnd()}</Text>
                </TouchableOpacity>

                <DateTimePickerModal
                  isVisible={isEndDatePickerVisible}
                  mode="datetime"
                  minDate={new Date()}
                  onConfirm={handleEndConfirm}
                  onCancel={hideEndDatePicker}
                  style={styles.textdatemodel}
                  date={endDate} // Initial date from state
                />
              </View>


            </View>




              </View>
            </View>
          </View>
        </View>


        <View style={styles.boxfull}>
          <View style={styles.boxInsidefull}>
            <View style={styles.boxHeader}>
              <Text style={styles.textHeader}> OPTION </Text>
            </View>
            <View
              style={{
                marginTop: 10,
              }}
            >
              <View style={{ alignItems: "center", flexDirection:'row' , justifyContent:'space-around'}}>
                <View >
                  <Text style={{ marginBottom:5 }}> Open Task</Text>
                  <CheckBox
                    disabled={false}
                    value={openTask}
                    onValueChange={(newValue) => {
                      setOpenTask(newValue);
                     // setAllDay(!newValue);
                    }}
                  />
                </View>

                <View>
                  <Text  style={{ marginBottom:5 }} >All Day</Text>

                  <CheckBox
                    disabled={false}
                    value={allDay}
                    onValueChange={(newValue) => {
                      setAllDay(newValue);
                    //  setOpenTask(!newValue);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        


        <View style={styles.boxfullLocation}>
          <View style={styles.boxInsidefullLocation}>
            <View style={styles.boxHeader}>
              <Text style={styles.textHeader}> LOCATION </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                boxfull: {
                    padding: 4,
                    borderRadius: 10,
              
                    alignItems: "center",
              
                    height: Platform.OS === "android" ? 130 : 130,
                    width:
                      Platform.OS === "android"
                        ? Dimensions.get("window").width - 22
                        : Dimensions.get("window").width - 22,
                    marginBottom:
                      (Dimensions.get("window").width -
                        (Dimensions.get("window").width - 10)) /
                      3,
              
                    backgroundColor: "#fff",
                    borderColor: "#000000",
                    borderWidth: 1,
                    margin: 4,
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    shadowOffset: {
                      height: 10,
                      width: 10,
                    },
                  },
            
                  boxInsidefull: {
                    width: "100%",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "rgba(122, 181, 29, 0.25)",
                    height: Platform.OS === "android" ? 120: 120,
                  },
            
              }}
            >
              <View style={{ alignItems: "flex-start" }}>

              <Text style={styles.Label}>LOCATION</Text>
              <View style={styles.dropdown}>
                <RNPickerSelect
                  onValueChange={(value) => {
                    if (value != 0) {
                      setLocationValue(value);
                    }
                  }}

                  placeholder={{ label: "Select Your Location", value: "0" }}
                  items={locations}
                />
              </View>
              </View>
            </View>
          </View>
        </View>
        
        
        <View style={styles.button}>
          {/* <TouchableOpacity //disabled={selectedExcercise.length == 0 ? true : false}
                    onPress={() => 
                        {}//_fetchAllLocation()  
                    //    _setIsViewSelected()
                    }
                    style={[styles.signIn, {
                        backgroundColor: selectedExcercise.length == 0 ? null : '#76b729',
                        borderColor: selectedExcercise.length == 0 ? '#76b729' : '#fff',
                        borderWidth: 1,
                        marginTop: 15,

                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: selectedExcercise.length == 0 ? '#76b729' : '#fff',
                    }]}>Selected ({selectedExcercise.length})</Text>
                </TouchableOpacity> */
            }
          <TouchableOpacity
            disabled={title.length == 0 ? true : false}
            onPress={() => _CreateTask()}
            style={[
              styles.signIn,
              {
                backgroundColor: title.length == 0 ? null : "#76b729",
                borderColor: title.length == 0 ? "#76b729" : "#fff",
                borderWidth: 1,
                marginTop: 15,
                marginBottom: 25,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: title.length == 0 ? "#76b729" : "#fff",
                },
              ]}
            >
              Next{" "}
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
