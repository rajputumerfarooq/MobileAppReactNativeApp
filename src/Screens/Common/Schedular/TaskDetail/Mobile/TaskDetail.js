import React, { useState, Component, useEffect, useRef } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";
//redux

import { useSelector } from "react-redux";
import NavigationStrings from "../../../../../Constants/NavigationStrings";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function TaskDetail() {
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const [viewExcerciseDetails, setViewExcerciseDetails] = useState([]);

  //redux

  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  const loggedUser = {
    username: user.userName,
    sessiontoken: user.sessionToken,
  };

  someMethod = (date) => {
    this.weekViewRef.goToDate(date);
  };
  function getParsedDate(date) {
    date = String(date).split(" ");
    var days = String(date[0]).split("-");
    var hours = String(date[1]).split(":");
    return [
      parseInt(days[0]),
      parseInt(days[1]) - 1,
      parseInt(days[2]),
      parseInt(hours[0]),
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
    var time = String(date[1]).split(":");

    return time[0] + ":" + time[1];
  }
  useEffect(() => {
    console.log(viewExcerciseDetails.excercises);
    setViewExcerciseDetails(route.params.obj);

    if (route.params.obj.type == "A") {
      setAico(true);
    } else if (route.params.obj.type == "G") {
      setGico(true);
    } else if (route.params.obj.type == "N") {
      setNico(true);
    } else if (route.params.obj.type == "M") {
      setMico(true);
    } else if (route.params.obj.type == "P") {
      setPico(true);
    }
  }, []);

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
            <Text style={{ fontSize: 16 }}>Rest Time (Sec):</Text>
            <Text style={{ fontSize: 16 }}>{item.maxRestMinutes}</Text>
          </View>
        </View>
      </View>
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
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxContainer}>
        <TouchableOpacity>
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
        <TouchableOpacity>
          <View style={styles.title_box2}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "30%" }}>
              {aico ? (
                <Animatable.View animation="bounceIn">
                 <FontAwesome name="check-square-o" color="#fff" size={20} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.title_box3}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>N</Text>
            </View>
            <View style={{ height: "30%" }}>
              {nico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.title_box4}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>M</Text>
            </View>
            <View style={{ height: "30%" }}>
              {mico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box_oprntask}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>P</Text>
            </View>
            <View style={{ height: "30%" }}>
              {pico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) :   <FontAwesome name="lock" color="#fff" size={20} />}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 15, flexDirection: "row" }}>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 20 }}
          >
            <Ionicons name="arrow-back-sharp" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {viewExcerciseDetails.title}
          </Text>
        </View>
      </View>

      <View style={{ padding: 10, flex: 0.2 }}>
        <Text style={{ fontSize: 20, alignSelf: "center", fontWeight: "bold" }}>
          {viewExcerciseDetails.description}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          DATE: {getParsedDateOnly(viewExcerciseDetails.startdate)}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          TIME: {getParsedTimeOnly(viewExcerciseDetails.startdate)} -{" "}
          {getParsedTimeOnly(viewExcerciseDetails.enddate)}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Location: {viewExcerciseDetails.location}
        </Text>
      </View>

      <View style={{ flex: 0.9, width: "100%", padding: 15 }}>
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

      <View style={{ flex: 0.15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {viewExcerciseDetails.excercises == 0 ? null : (
            <TouchableOpacity
              style={{
                borderRadius: 10,
                backgroundColor: "#76b729",
                borderColor: "#76b729",
                borderWidth: 2,
              }}
              onPress={() => {
                //   navigation.navigate(NavigationStrings.SCHEDULAR_WORKOUT, {
                //   obj: viewExcerciseDetails,
                // })
              }}
            >
              <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>
                Start Workout
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
