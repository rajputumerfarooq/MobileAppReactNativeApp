//import liraries

import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
//Styles
import styles from "./styles";
//API
import axios from "axios";
import { API_GET_PLANNER_EXERCISES } from "../../../../../../api/urls";
import {
  _fetchSubCategories,
  createAppointmentSchedular,
} from "../../../../../../api/InvokeApi";
//Icons
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
//Redux
import { useDispatch } from "react-redux";
import {
  AddExercise,
  EmptyExercises,
  RemoveExercise,
} from "../../../../../../Store/ExerciseReducer/type";
import {
  AddAppointment,
  AppointmentReducer,
} from "../../../../../../Store/appointmentReducer/type";
import { useSelector } from "react-redux";

//Navigation
import {
  useNavigation,
  useRoute,
  StackActions,
} from "@react-navigation/native";
import NavigationStrings from "../../../../../../Constants/NavigationStrings";

//animation
import * as Animatable from "react-native-animatable";

// create a component
const Exercises = () => {
  //Navigation
  const route = useRoute();
  const navigation = useNavigation();
  //redux
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const { appointment } = useSelector((state) => {
    return {
      appointment: state.appointmentReducer.appointment,
    };
  });

  const { exercises } = useSelector((state) => {
    return {
      exercises: state.exerciseReducer.exercises,
    };
  });

  const requestBody = {
    loggedUser: {
      username: user.userName,
      sessiontoken: user.sessionToken,
    },
  };
  //heading
  const [gico, setGico] = useState(true);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);

  //States
  const [fetchedData, setfetchedData] = useState([]);

  const [array, setarray] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const refRBSheet = useRef();
  const dispatch = useDispatch();
  const checkIfExerciseAlreadySelected = (id) => {
    var isChecked = false;

    exercises.map((item) => {
      if (item.id == id) isChecked = true;
    });
    return isChecked;
  };
  useEffect(() => {
    _fetchExercises();
  }, []);
  const _fetchAthletics = async () => {
    // navigation.navigate(NavigationStrings.STRIKER_ATHELTIC_STACK);
  };
  // Fetching Data from API
  const _fetchExercises = async () => {
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
      parrentid: route.params.obj.id,
      equipmentid: "0",
    };

    try {
      const response = await axios.post(API_GET_PLANNER_EXERCISES, {
        loggeduser: requestBody.loggedUser,
        parrentid: requestBody.parrentid,
        equipmentid: "0",
      });
      //Modifying the Data from Api to have isChecked key value pair
      let temp = response.data;
      let arrayCheck = [];
      temp.map((obj) => {
        (obj.isChecked = checkIfExerciseAlreadySelected(obj.id)),
          (obj.sets = 0),
          (obj.reps = 0),
          (obj.startingWeightKg = 0),
          (obj.increaseWeightKg = 0),
          (obj.maxRestMinutes = 0);

        arrayCheck.push(obj);
      });

      setfetchedData(arrayCheck);
      setfetchedData(response.data);
    } catch (error) {
      alert(error);
    }
  };

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
            navigation.navigate(NavigationStrings.GOLF_EXERCISE_DETAIL, {
              obj: item,
            });
          }}
        ></TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          dispatch({ type: RemoveExercise, payload: item.id });

          let tempArray = [...fetchedData];
          finalArray = [];
          tempArray.map((obj) => {
            if (obj.id == item.id) {
              obj.isChecked = !obj.isChecked;
            }
            finalArray.push(obj);
          });

          setfetchedData(finalArray);

          // setfetchedData( finalArray)
        }}
      >
        <Ionicons name="ios-trash-bin" color="#f44336" size={30}>
          {" "}
        </Ionicons>
      </TouchableOpacity>
    </View>
  );

  const addExercises = async () => {
    let temp = [];
    exercises.map((item) => {
      if (item.isChecked) {
        const exci = {
          id: item.id,
          sets: item.sets,
          reps: item.reps,
          startingWeightKg: item.startingWeightKg,
          increaseWeightKg: item.increaseWeightKg,
          maxRestMinutes: item.maxRestMinutes,
        };
        temp.push(exci);
      }
    });




    const finalCreateExerciseObject = {
      title: appointment.title,
      description: appointment.description,
      startdate: appointment.startdate,
      enddate: appointment.enddate,
      allday: appointment.allday,
      repeat: appointment.repeat,
      opentask: appointment.opentask,
      locationid: appointment.opentask == true ? 1 : appointment.locationid,
      type: appointment.type,
      excerciselist: temp,
      username: appointment.username,
    };

    if (exercises.length == 0) {
      Alert.alert("Select Any Excercise.");
      return;
    }

    var res = await createAppointmentSchedular(
      requestBody.loggedUser,
      finalCreateExerciseObject
    );





    if (res.status == "200") {
      Alert.alert("Appointment Created Successfully.");
    

    dispatch({ type: AddAppointment, payload: undefined });
    dispatch({ type: EmptyExercises, payload: [] });



    
    navigation.reset({
      index: 0,
      routes: [{ name: NavigationStrings.PLANNER_STACK }],
    });

    // navigation.navigate(NavigationStrings.PLANNER_STACK)
    
    navigation.navigate(NavigationStrings.PLANNER_STACK, {
      screen: NavigationStrings.STRIKER_PLANNER,
      initial: false,
    });

  }

  else {
    Alert.alert("Please Try Again");

  }


  };

  renderExercises = ({ item, index }) => {
    return (
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
              navigation.navigate(NavigationStrings.GOLF_EXERCISE_DETAIL, {
                obj: item,
              });
            }}
          >
            <Text style={{ fontSize: 13, color: "#f44336" }}>
              View Details ?
            </Text>
          </TouchableOpacity>
        </View>

        <CheckBox
          // style={{borderColor:'black',color:'#000', backgroundColor:'#000'}}
          onCheckColor={"#76b729"}
          onTintColor={"#76b729"}
          boxType={"square"}
          tintColors={{ true: "#76b729" }}
          disabled={false}
          value={item.isChecked}
          onValueChange={(value) => {
            let array = [...fetchedData];
            array[index].isChecked = value;

            if (value == true) {
              const tempIndex = { orignalIndex: index };
              const tempArray = { ...array[index], ...tempIndex };
              dispatch({ type: AddExercise, payload: tempArray });
            } else {
              dispatch({ type: RemoveExercise, payload: array[index].id });
            }

            setfetchedData(array);
          }}
        />
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.boxContainerRow}>
        <TouchableOpacity //onPress={() => _fetchGolf()}
        >
          <View style={styles.title_box1}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>G</Text>
            </View>
            <View style={{ height: "30%" }}>
              {gico ? (
                <Animatable.View animation="bounceIn">
                  <FontAwesome name="check-square-o" color="#fff" size={20} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _fetchAthletics()}>
          <View style={styles.title_box2}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "30%" }}>
              {aico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : (
               null
              )}
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
              ) : (
                <FontAwesome name="lock" color="#fff" size={20} />
              )}
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
              ) : (
                <FontAwesome name="lock" color="#fff" size={20} />
              )}
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
              ) : (
                <FontAwesome name="lock" color="#fff" size={20} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* First Part of Screen */}

      <View style={{ flexDirection: "row", marginBottom: 5 }}>
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
            EXCERCISE LIST
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.86,
          backgroundColor: "white",
          width: "100%",
          padding: 10,
        }}
      >
        <FlatList
          data={fetchedData}
          keyExtractor={(item) => item.id}
          renderItem={renderExercises}
        />
      </View>

      <View style={{ flex: 0.15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.open();
            }}
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderColor: "#76b729",
              borderWidth: 2,
            }}
          >
            <Text style={{ margin: 10, color: "#76b729", fontWeight: "400" }}>
              {" "}
              Selected Exercises {exercises.length}{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: "#76b729",
              borderColor: "#76b729",
              borderWidth: 2,
            }}
            onPress={addExercises}
          >
            <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>
              {" "}
              Create Appointment{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        animationType="fade"
        ref={refRBSheet}
        dragFromTopOnly={true}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={550}
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Selected Exercises
        </Text>

        <FlatList
          data={exercises}
          showsVerticalScrollIndicator={false}
          renderItem={renderSelectedExercises}
        />
      </RBSheet>
    </View>
  );
};

//make this component available to the app
export default Exercises;
