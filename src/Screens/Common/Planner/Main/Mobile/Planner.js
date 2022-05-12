import React, { useState, Component, useEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";
import { useIsFocused } from "@react-navigation/native";
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
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";

//icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
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

export default function Planner() {
  const [switchState, setSwitchState] = useState(false);
  const toggleSwitch = () => setSwitchState((switchState) => !switchState);
  const [allDaySwitchState, setAllDaySwitchState] = useState(false);
  const toggleAllDaySwitch = () =>
    setAllDaySwitchState((allDaySwitchState) => !allDaySwitchState);
  //redux
  const { excercise } = useSelector((state) => {
    return {
      exercises: state.userReducer.excercise,
    };
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);

  const [selectedExcercise, setSelectedExcercise] = useState([]);
  const isFocused = useIsFocused();
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const route = useRoute();
  const [locationValue, setLocationValue] = useState("None");
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isLocationPickerVisible, setLocationVisibility] = useState(false);
  const [locations, setLocations] = useState([]);

  const [title, onChangeTitle] = React.useState("");

  //redux
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const [data, setData] = React.useState({
    title: "",
    descripition: "",
  });

  const requestBody = {
    loggedUser: {
      username: user.userName,
      sessiontoken: user.sessionToken,
    },
  };

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        title: val,
      });
    } else {
      setData({
        ...data,
        title: val,
      });
    }
  };

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
  const _fetchAthletics = async () => {
    if (aico == true) {
      setAico(false);
    } else {
      setAico(true);
    }
    setGico(false);
  };
  const _fetchGolf = async () => {
    if (gico == true) {
      setGico(false);
    } else {
      setGico(true);
    }
    setAico(false);
  };

  const _CreateTask = async () => {
    if (gico == false && aico == false) {
      Alert.alert("Select Appointment Type Golf or Atheltic.");
      return;
    }
    if (title == "") {
      Alert.alert("title Required. ");
      return;
    } else {
      const appointment = {
        title: data.title,
        description: data.descripition,
        startdate: startDate,
        enddate: endDate,
        allday: allDaySwitchState,
        repeat: "0",
        opentask: switchState,
        locationid: locationValue,
        type: gico == true ? "G" : "A",
        excerciselist: selectedExcercise,
        username: requestBody.loggedUser.username,
      };

      dispatch({ type: AddAppointment, payload: appointment });

      if (gico == true) {
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
  useEffect(() => {
    _fetchAllLocation();

    setAico(false);
    setGico(false);
    onChangeTitle("");
    setSwitchState(false);
    setAllDaySwitchState(false);

    //    if(route.params.status==1){
    //        setGico(true);
    //        setAico(false);
    //    }else if(route.params.status==2){
    //        setGico(false);
    //        setAico(true);
    //    }
    //    else{
    //     setGico(false);
    //     setAico(false);
    //    }
    //    setSelectedExcercise(route.params.obj)
  }, [isFocused]);

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

  return (
    <SafeAreaView>
      {/* scroll start */}
      <ScrollView>

        
        <View style={styles.boxContainer}>
          
          
          <TouchableOpacity
            onPress={() => {
              dispatch({ type: EmptyExercises, payload: [] });
              _fetchGolf();
            }}
          >
            <View style={styles.title_box1}>
              <View style={{ height: "70%", justifyContent: "flex-end" }}>
                <Text style={styles.title_text}>G</Text>
              </View>
              <View style={{ height: "30%" }}>
                {gico ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check" color="#fff" size={30} />
                  </Animatable.View>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              _fetchAthletics();

              dispatch({ type: EmptyExercises, payload: [] });
            }}
          >
            <View style={styles.title_box2}>
              <View style={{ height: "70%", justifyContent: "flex-end" }}>
                <Text style={styles.title_text}>A</Text>
              </View>
              <View style={{ height: "30%" }}>
                {aico ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check" color="#fff" size={30} />
                  </Animatable.View>
                ) : null}
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
                {nico ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check" color="#fff" size={30} />
                  </Animatable.View>
                ) : null}
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
                {mico ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check" color="#fff" size={30} />
                  </Animatable.View>
                ) : null}
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
                {pico ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check" color="#fff" size={30} />
                  </Animatable.View>
                ) : null}
              </View>
            </View>
          </TouchableOpacity>


        </View>

        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              CREATE APPOINTMENT{" "}
            </Text>
          </View>
        </View>

        <ScrollView>
          <Text style={styles.Label}>TASK TITLE</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="TASK TITLE"
              placeholderTextColor={colors.text}
              style={styles.inputtext}
              autoCapitalize="none"
              onChangeText={onChangeTitle}
              value={title}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              justifyContent: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text>Open Task </Text>
              <Switch
                value={switchState}
                onValueChange={toggleSwitch}
                style={{ width: 100, padding: 10 }}
              />
            </View>
            {switchState == false ? (
              <View>
                <Text>All Day Event</Text>
                <Switch
                  value={allDaySwitchState}
                  onValueChange={toggleAllDaySwitch}
                  style={{ width: 100, padding: 10 }}
                />
              </View>
            ) : null}
          </View>

          {switchState == false ? (
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
          ) : null}
        </ScrollView>
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
                </TouchableOpacity> */}
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
      </ScrollView>
    </SafeAreaView>
  );
}
