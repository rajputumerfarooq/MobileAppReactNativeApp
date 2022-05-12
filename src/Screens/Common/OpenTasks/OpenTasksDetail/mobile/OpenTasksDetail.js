//import liraries
import React, { Component, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableOpacityBase,
  Image,
  Alert,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownPicker from "react-native-dropdown-picker";
import RNPickerSelect from "react-native-picker-select";
//Redux
import { useSelector } from "react-redux";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
//Style
import styles from "./styles";
//Navigation
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
//RB Sheet
import RBSheet from "react-native-raw-bottom-sheet";
//API
import {
  GetPlannerLocations,
  _updateOpenTasks,
} from "../../../../../api/InvokeApi";
import {
  API_GET_UPDATE_SCHEDULAR_TASKS,
  API_DELLETE_SCHEDULAR_TASK,
} from "../../../../../api/urls";
import axios from "axios";
//Focus

// create a component
const OpenTasksDetail = () => {
  //States
  const [previousData, setPreviousData] = useState();
  const [dateTime, setDateTime] = useState();
  const [switchState, setSwitchState] = useState(false);
  const toggleSwitch = () => setSwitchState((switchState) => !switchState);
  const [allDaySwitchState, setAllDaySwitchState] = useState(false);
  const toggleAllDaySwitch = () =>
    setAllDaySwitchState((allDaySwitchState) => !allDaySwitchState);

  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [locationValue, setLocationValue] = useState("None");
  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [isLocationPickerVisible, setLocationVisibility] = useState(false);
  const [locations, setLocations] = useState([]);
  //Constants
  const navigation = useNavigation();
  const route = useRoute();
  const focus = useIsFocused();
  const refRBSheet = useRef();
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const requestBody = {
    loggeduser: {
      username: user.userName,
      sessiontoken: user.sessionToken,
    },
    username: user.userName,
  };

  //ComponentDidMount
  useEffect(() => {
    const temp = route.params.obj;
    setPreviousData(temp);
    _fetchAllLocation();
  }, [route.params, focus]);

  const _updateSchedularTask = async (values) => {
    try {
      const appointment = {
        username: requestBody.username,
        title: route.params.obj.title,
        description: route.params.obj.description,
        startdate: startDate,
        enddate: endDate,
        opentask: 1,
        allday: 0,
        repeat: 0,
        locationid: locationValue,
        id: route.params.obj.id,
      };

      console.log("odhjfoijifdjhuifdnjkvhfduvhudfhvufdhbhjvbdfbvghb")
      console.log(appointment)

      const response = await _updateOpenTasks(
        requestBody.loggeduser,
        appointment
      );



      if (response.status == "200") {
        alert("Task Updated");
        navigation.goBack();
      }
    } catch (error) {
      alert(error);
    }
  };

  const _delleteOpenTask = async () => {
    try {
      const check = {
        loggeduser: {
          sessiontoken: user.sessionToken,
          username: user.userName,
        },
        schedularId: route.params.obj.id,
      };

      console.log(check);
      const response = await axios.post(API_DELLETE_SCHEDULAR_TASK, {
        loggeduser: {
          sessiontoken: user.sessionToken,
          username: user.userName,
        },
        schedularId: route.params.obj.id.toString(),
      });

      if (response.status == 200) {
        Alert.alert("Successfully Delleted");
        navigation.goBack();
      }
  
    } catch (error) {
      
      Alert.alert("Please try again later");
      navigation.goBack();

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

  const _fetchAllLocation = async () => {
    const response = await GetPlannerLocations(requestBody.loggeduser);
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

  const renderAthleticOpenTask = ({ item }) => (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 30,
        overflow: "hidden",
      }}
    >
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 10 }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 5,
            paddingTop: 10,
            color: "#000",
          }}
        >
          {item.name}
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.3 }}>
          <Image
            style={{ height: 110, width: 110, resizeMode: "contain" }}
            source={{ uri: item.gif }}
          />
        </View>

        <View style={{ flex: 0.7, flexDirection: "column" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Sets:</Text>
            <Text style={{ fontSize: 16 }}>{item.sets}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Repetition:</Text>
            <Text style={{ fontSize: 16 }}>{item.reps}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Starting Weight (Kg):</Text>
            <Text style={{ fontSize: 16 }}>{item.startingWeightKg}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Increasing Weight (kg):</Text>
            <Text style={{ fontSize: 16 }}>{item.increaseWeightKg}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Text style={{ fontSize: 16 }}>Rest Time (kg):</Text>
            <Text style={{ fontSize: 16 }}>{item.maxRestMinutes}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderGolfOpenTask = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{ flexDirection: "row", marginBottom: 5, flex: 0.1 }}>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 0, marginLeft: 20 }}
          >
            <Ionicons name="arrow-back-sharp" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {route.params.obj.title}
          </Text>
        </View>
      </View>

      {/* Body */}

      <View style={{ flex: 0.75 }}>
        <FlatList
        showsVerticalScrollIndicator={false} 
          data={route.params.obj.excercises}
          renderItem={
            route.params.obj.type == "G"
              ? renderGolfOpenTask
              : renderAthleticOpenTask
          }
        />
      </View>

      <View
        style={{
          flex: 0.08,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            _delleteOpenTask();
          }}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "48%",
            backgroundColor: "#CD6061",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Dellete</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            refRBSheet.current.open();
          }}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "48%",
            backgroundColor: "#76b729",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>Add Date & Time</Text>
        </TouchableOpacity>
      </View>

      <RBSheet
        animationType="fade"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={450}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View style={{ marginBottom: 50 }}>
          <Text style={styles.Label}>START DATE & TIME </Text>
          <View style={styles.action}>
            <Ionicons
              name="ios-calendar"
              color={colors.text}
              size={26}
              style={{ width: "10%" }}
            />
            <TouchableOpacity
              onPress={showStartDatePicker}
              style={styles.dropdownDate}
            >
              <Text style={styles.textdatedropdown}>{getStringStart()}</Text>
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
            <Ionicons
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

          <TouchableOpacity
            onPress={() => {
              const temp = {
                startDate: startDate,
                endDate: endDate,
                locationValue: locationValue,
              };

              _updateSchedularTask(temp);
            }}
            style={{
              padding: 12,
              borderRadius: 13,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
              backgroundColor: "#76b729",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20 }}>Save</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

//make this component available to the app
export default OpenTasksDetail;
