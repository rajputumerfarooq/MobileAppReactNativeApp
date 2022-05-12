import React, { useState, Component, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import WeekView, { createFixedWeekDate } from "react-native-week-view";
import Icon from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set } from "lodash";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../../../../assets/colors";
import styles from "./style";
import CalendarStrip from "react-native-calendar-strip";
// API
import { apiGetAppointmentsforSchedular } from "../../../../../api/InvokeApi";
//redux
import { SetUser } from "../../../Store/userReducer/type";
import { useSelector } from "react-redux";
import Animated from "react-native-reanimated";
import RBSheet from "react-native-raw-bottom-sheet";
import NavigationStrings from "../../../../../Constants/NavigationStrings";

import { useNavigation } from "@react-navigation/native";

export default function Schedular() {
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);
  const isFocused = useIsFocused();

  const [day, setDay] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const date = useRef(startDate);
  const [myEvents, setMyEvents] = useState([]);
  const [intialData, setIntialData] = useState([]);
  const [myTempEvents, setMyTempEvents] = useState([]);
  const [viewExcerciseDetails, setViewExcerciseDetails] = useState([]);

  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
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

  const MyEventComponent = ({ event, position }) => (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View
        style={{
          //borderRadius:10,

          backgroundColor:
            event.type === "A"
              ? "solid rgb(157, 157, 156)"
              : event.type === "N"
              ? "solid rgb(251, 185, 0)"
              : event.type === "M"
              ? "solid rgb(0, 105, 180)"
              : event.type === "P"
              ? "solid rgb(67, 202, 202)"
              : event.type === "T"
              ? "red"
              : event.type === "G"
              ? "solid rgb(118, 183, 41)"
              : "pink",

          //height:'100%',
          width: 10,
        }}
      />
      <View
        style={{
          // borderRadius:10,
          backgroundColor:
            event.type === "A"
              ? "#f0f0f0"
              : event.type === "N"
              ? "#fef5d9"
              : event.type === "M"
              ? "rgb(0, 105, 180, 0.15)"
              : event.type === "P"
              ? "#e3f7f7"
              : event.type === "T"
              ? "#ffd9d9"
              : event.type === "G"
              ? "#ebf4d4"
              : "pink",
          // height:'100%',
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 10, alignSelf: "center" }}>
          {event.description}
        </Text>
      </View>
    </View>
  );
  const loggedUser = {
    username: user.userName,
    sessiontoken: user.sessionToken,
  };

  someMethod = (date) => {
    this.weekViewRef.goToDate(date);
  };

  const _fetchSchedular = async (day) => {
    setDay(day);
    setWeekShow(true);
  };
  function getParsedDate(date) {
    date = String(date).split(" ");
    var days = String(date[0]).split("-");
    var hours = String(date[1]).split(":");
    return [
      parseInt(days[0]),
      parseInt(days[1]) - 1,
      parseInt(days[2]),
      parseInt(hours[0]) + 1,
      parseInt(hours[1]),
      parseInt(hours[2]),
    ];
  }

  function getParsedDateOnly(date) {
    date = String(date).split(" ");

    return date[0];
  }

  function getParsedTimeOnly(date) {
    date = String(date).split(" ");

    return date[1];
  }
  const _fetchData = async () => {
    try {
      //   setMyEvents([]);
      let usernameselected =
        selecteduser == undefined ? user.userName : selecteduser.userName;
      //   console.log('=================================================================',usernameselected)
      const response = await apiGetAppointmentsforSchedular(
        loggedUser,
        usernameselected
      );

      if (JSON.stringify(response.status) == "200") {
        //    console.log('=================================================================',response.data)

        let apps = response.data;
        setIntialData(apps);

        let arr = [];
        if (apps.length > 0) {
          for (var element = 0; element < apps.length; element++) {
            var exc = "";
            if (apps[element].excercises != null) {
              for (
                var element1 = 0;
                element1 < apps[element].excercises.length;
                element1++
              ) {
                exc =
                  exc + "\n" + apps[element].excercises[element1].excercises;
              }
            }

            var statedate = new Date(...getParsedDate(apps[element].startdate));
            var enddate = new Date(...getParsedDate(apps[element].enddate));
            //console.log(statedate,enddate);
            let obj = {
              id: apps[element].id,
              description: apps[element].title, //+ '\n' + apps[element].description + '\n' + exc
              // startDate:  new Date(new Date(apps[element].startdate).getFullYear(),new Date(apps[element].startdate).getMonth(),new Date(apps[element].startdate).getDate(),new Date(apps[element].startdate).getUTCHours(),new Date(apps[element].startdate).getUTCSeconds()),
              startDate: statedate,
              //  endDate: new Date(new Date(apps[element].enddate).getFullYear(),new Date(apps[element].enddate).getMonth(),new Date(apps[element].enddate).getDate(),new Date(apps[element].enddate).getUTCHours(),new Date(apps[element].enddate).getUTCSeconds()),
              endDate: enddate,
              //  borderWidth:10,
              borderRadius: 40,
              //fontSize:50,
              color: "transparent",
              type: apps[element].type,
              // apps[element].type=='G'? colors.primary:apps[element].type=='A'? colors.fourth_primary:apps[element].type=='N'? colors.second_primary:apps[element].type=='M'?colors.third_primary:colors.fiv_primary,
            };

            arr = [...arr, obj];
          }
        }
        //    console.log('testtttttttttttt',arr);
        setMyEvents(arr);

        setMyTempEvents(arr);
      }
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  const _fetchGolf = async () => {
    try {
      if (gico == true) {
        setGico(false);
        _fetchAllData();
      } else {
        setGico(true);

        _fetchFilterData(colors.primary);
        setAico(false);
        setNico(false);
        setMico(false);
        setPico(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  const _fetchAllData = async () => {
    try {
      let apps = myTempEvents;

      let arr = [];
      if (apps.length > 0) {
        for (var element = 0; element < apps.length; element++) {
          let obj = {
            id: apps[element].id,
            description: apps[element].description,
            startDate: new Date(apps[element].startDate), // Day may be passed as string
            endDate: new Date(apps[element].endDate), //apps[element].enddate, // Or as number, 1 = monday
            color: apps[element].color,
          };

          arr = [...arr, obj];
        }
      }
      setMyEvents(arr);
      //}
    } catch (error) {
      alert(error);
    }
  };

  const _fetchFilterData = async (val) => {
    try {
      let apps = myTempEvents;
      let arr = [];
      if (apps.length > 0) {
        for (var element = 0; element < apps.length; element++) {
          if (apps[element].color == val) {
            let obj = {
              id: apps[element].id,
              description: apps[element].description,
              startDate: new Date(apps[element].startDate), // Day may be passed as string
              endDate: new Date(apps[element].endDate), //apps[element].enddate, // Or as number, 1 = monday
              color: apps[element].color,
            };

            arr = [...arr, obj];
          }
        }
      }
      setMyEvents(arr);
      //}
    } catch (error) {
      alert(error);
    }
  };
  const _fetchAthletics = async () => {
    try {
      if (aico == true) {
        setAico(false);
        _fetchAllData();
      } else {
        setAico(true);

        _fetchFilterData(colors.fourth_primary);
        setGico(false);
        setNico(false);
        setMico(false);
        setPico(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const _fetchNut = async () => {
    try {
      if (nico == true) {
        setNico(false);
        _fetchAllData();
      } else {
        setNico(true);

        (colors.second_primary);
        setGico(false);
        setAico(false);
        setMico(false);
        setPico(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  const _fetchM = async () => {
    try {
      if (mico == true) {
        setMico(false);
        _fetchAllData();
      } else {
        setMico(true);

        _fetchFilterData(colors.third_primary);
        setGico(false);
        setAico(false);
        setNico(false);
        setPico(false);
      }
    } catch (error) {
      alert(error);
    }
  };
  const _fetchP = async () => {
    try {
      if (pico == true) {
        setPico(false);
        _fetchAllData();
      } else {
        setPico(true);

        _fetchFilterData(colors.fiv_primary);
        setGico(false);
        setAico(false);
        setNico(false);
        setMico(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    _fetchData();
  }, [isFocused]);

  //Functions
  const renderSelectedExercisesAthletic = ({ item }) => (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 30,
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

      {/* <TouchableOpacity
        onPress={ () => {
 
  
  
          let tempArray = [...fetchedData];
          finalArray = [];
          tempArray.map( (obj)=>{
            if (obj.id == item.id) {
              obj.isChecked =  !obj.isChecked;
            }
            finalArray.push(obj);
          })
  
          setfetchedData(finalArray)
          
  
  
        }}
        style={{ width:'80%', padding:10, alignItems:'center' }}
      >
        <View>
          <Text style={{fontSize:18, color:"#f44336"}}>
            Dellete ?
          </Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );

  //Functions
  const renderSelectedExercises = ({ item }) => (
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(
              NavigationStrings.STRIKER_GOLF_EXERCISE_DETAIL,
              { obj: item }
            );
          }}
        ></TouchableOpacity>
      </View>

      {/* <TouchableOpacity
            onPress={ ()=>{
             
  
  
              let tempArray = [...fetchedData];
              finalArray = [];
              tempArray.map( (obj)=>{
                if (obj.id == item.id) {
                  obj.isChecked =  !obj.isChecked;
                }
                finalArray.push(obj);
              })
  
              setfetchedData(finalArray)
              
  
  
  
              
      
      
              // setfetchedData( finalArray)
              
            }}
          
          >
            <Ionicons name="ios-trash-bin" color="#f44336" size={30}> </Ionicons>
          </TouchableOpacity> */}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxContainer}>
        <TouchableOpacity 
        //</View>onPress={() => _fetchGolf()}
        >
          <View style={styles.title_box1}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>G</Text>
            </View>
            <View style={{ height: "30%" }}>
              {gico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome
                    name="check-square-o"
                    color={"white"}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
        
          //onPress={() => _fetchAthletics()}
          
          
          
          >
          <View style={styles.title_box2}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "30%" }}>
              {aico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome
                    name="check-square-o"
                    color={"white"}
                    size={20}
                  />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 

          
          //onPress={() => _fetchNut()}
          
          >
          <View style={styles.title_box3}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>N</Text>
            </View>
            <View style={{ height: "30%" }}>
              {nico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome
                    name="check-square-o"
                    color={"white"}
                    size={20}
                  />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          //onPress={() => _fetchM()}
        
        >
          <View style={styles.title_box4}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>M</Text>
            </View>
            <View style={{ height: "30%" }}>
              {mico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome
                    name="check-square-o"
                    color={"white"}
                    size={20}
                  />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          //onPress={() => _fetchP()}
          >
          <View style={styles.box_oprntask}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>P</Text>
            </View>
            <View style={{ height: "30%" }}>
              {pico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome
                    name="check-square-o"
                    color={"white"}
                    size={20}
                  />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <CalendarStrip
          showMonth={true}
          scrollable={true}
          onDateSelected={(dat) => {
            //console.log(dat);

            //  setStartDate(new Date(dat));

            this.someMethod(dat);
          }}
          borderHighlightColor={colors.primary}
          highlightColor={colors.primary}
          Type="border"
          borderWidth="10"
          highlightDateNumberStyle={{
            borderColor: colors.primary,
            backgroundColor: colors.primary,
          }}
          selectedDate={startDate}
          scrollToOnSetSelectedDat={true}
          style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        />
      </View>

      <View style={styles.weekView}>
        <WeekView
          events={myEvents}
          EventComponent={MyEventComponent}
          fixedHorizontally={false}
          onEventPress={(event) => {
            var appointment = [];
            intialData.map((item) => {
              if (item.id == event.id) appointment.push(item);
            });
            navigation.navigate(NavigationStrings.SCHEDULAR_TASK_DETAIL, {
              obj: appointment[0],
            });




            //                             setViewExcerciseDetails(appointment[0])
            //                           //  console.log(appointment[0]);
            // refRBSheet.current.open();
          }}
          // Recommended props:
          showHeader={false}
          startHour={8}
          hoursInDisplay={12}
          showTitle={false} // if true, shows this month and year
          showNowLine={true}
          hourTextStyle={{
            fontStyle: "italic",
            alignItems: "center",
            fontSize: 15,
            // borderWidth:1,
            //paddingRight:10,
            //   borderColor:"red",
            alignSelf: "center",
            //padding:4,
            //borderEndWidth:1,
            // borderRadius:1,
            //paddingBottom:60,
            marginLeft: 10,

            margin: 6,
          }}
          timeStep={60}
          numberOfDays={day}
          selectedDate={new Date()}
          weekStartsOn={1}
          // onSwipeNext={true}
          //onSwipePrev={true}
          ref={(ref) => {
            this.weekViewRef = ref;
          }}
          headerStyle={styles.header}
          // headerTextStyle={styles.header}
          nowLineColor={colors.primary}
          eventContainerStyle={styles.event}
          formatDateHeader="dddd YYYY/MM/DD" // display short name days, e.g. Mon, Tue, etc
          // ... other props
        />
      </View>

      <RBSheet
        animationType="fade"
        ref={refRBSheet}
        dragFromTopOnly={true}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={1800}
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
        <View style={{ flex: 0.2 }}>
          <Text
            style={{ fontSize: 20, alignSelf: "center", fontWeight: "bold" }}
          >
            {viewExcerciseDetails.title}
          </Text>
          <Text
            style={{ fontSize: 20, alignSelf: "center", fontWeight: "bold" }}
          >
            {viewExcerciseDetails.description}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Date: {getParsedDateOnly(viewExcerciseDetails.startdate)}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Time: {getParsedTimeOnly(viewExcerciseDetails.startdate)} -{" "}
            {getParsedTimeOnly(viewExcerciseDetails.enddate)}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Location: {viewExcerciseDetails.location}
          </Text>
        </View>

        <View style={{ flex: 0.7, width: "100%", padding: 15 }}>
          <FlatList
            data={viewExcerciseDetails.excercises}
            showsVerticalScrollIndicator={false}
            renderItem={
              viewExcerciseDetails.type == "G"
                ? renderSelectedExercises
                : renderSelectedExercisesAthletic
            }
          />
        </View>
      </RBSheet>
    </SafeAreaView>
  );
}
