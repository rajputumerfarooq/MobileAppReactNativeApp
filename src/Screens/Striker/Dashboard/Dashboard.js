import React, { useState, createRef, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
  FlatList,
} from "react-native";

// GeoLocation
import RNLocation from "react-native-location";

import WhoopDay from "./Dashboard/WhoopDay";
import Messenger from "./Dashboard/Messenger";
import TaskList from "./Dashboard/TaskList";
import TodaysTask from "./Dashboard/TodaysTask";

import GolfTest from "./Dashboard/GolfTest";
import PlayerHistory from "./Dashboard/PlayerHistory";

import Games from "./Dashboard/Games";

import { AutoDragSortableView } from "react-native-drag-sort";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";
import styles from "../../Signup/Mobile/styles";

import Fitness1 from "./Dashboard/Fitness1";
import Practise from "./Dashboard/Practise";
import Mental from "./Dashboard/Mental";
import Bag from "./Dashboard/Bag";
import RoundAnalysis from "./Dashboard/RoundAnalysis";
import Par from "./Dashboard/Par";
import Trackman from "./Dashboard/Trackman";
import Putlab from "./Dashboard/Putlab";
import LocationTracking from "../../Common/LocationTracking/LocationTracking";
//Navigation
import {
  useNavigation,
  useRoute,
  StackActions,
} from "@react-navigation/native";
import { useSelector } from "react-redux";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Aachen from "./Dashboard/Aachen";
import TimeManagement from "./Dashboard/TimeManagement";
import NavigationStrings from "../../../Constants/NavigationStrings";
import Workout from "./Dashboard/Workout/Workout";
//Charts
import RadarChartScreen from "./Dashboard/RadarChartScreen";
import AgainstPar from "./Dashboard/AgainstPar";

const Dashboard = () => {
  //Navigation
  const route = useRoute();
  const navigation = useNavigation();

  //redux

  const { selecteduser } = useSelector((state) => {
    return {
      selecteduser: state.SelectedUserReducer.selecteduser,
    };
  });

  useEffect(() => {}, []);

  const stylesMobile = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    boxInside: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "rgba(122, 181, 29, 0.25)",
      height: Platform.OS === "android" ? 158 : 158,
    },
    boxInsidefull: {
      width: "100%",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "rgba(122, 181, 29, 0.25)",
      height: Platform.OS === "android" ? 188 : 188,
    },
    scrollContainer: {
      width: "100%",

      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },

    header: {
      fontSize: Platform.OS === "android" ? 12 : 12,
      color: "#000000",
      fontWeight: "bold",
    },

    scroll: {
      width: "100%",
      marginTop: 0,
    },
    box: {
      padding: 4,
      borderRadius: 10,

      alignItems: "center",

      height: Platform.OS === "android" ? 170 : 170,
      width:
        Platform.OS === "android"
          ? Dimensions.get("window").width / 2 - 15
          : Dimensions.get("window").width / 2 - 15,
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

    boxfull: {
      padding: 4,
      borderRadius: 10,

      alignItems: "center",

      height: Platform.OS === "android" ? 200 : 200,
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

    boxHeader: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      // borderBottomWidth: 2,
      //borderBottomColor: 'rgba(122,181,29,.25)',

      paddingBottom: 0,
      alignSelf: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      fontSize: 1,

      justifyContent: "center",
      height: Platform.OS === "android" ? 30 : 28,
      width: "100%",
      backgroundColor: "rgba(122, 181, 29, 0.25)",
    },

    textHeader: {
      alignSelf: "center",
      alignItems: "center",
      // fontFamily:'Open-Sans',
      fontWeight: "normal",
      fontSize: 12,
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
      }}
    >
      <ScrollView>
        {selecteduser != undefined ? (
          <View style={{ flexDirection: "row", paddingTop: 20 }}>
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
                {selecteduser.firstName} {selecteduser.lastName} Dashboard
              </Text>
            </View>
          </View>
        ) : null}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            paddingTop: 6,
          }}
        >
          {/*  scheduler */}
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationStrings.SCHEDULAR)}
          >
            <View style={stylesMobile.box}>
              <View style={stylesMobile.boxInside}>
                <View style={stylesMobile.boxHeader}>
                  <Text style={stylesMobile.textHeader}>SCHEDULER</Text>
                </View>

                <TodaysTask></TodaysTask>
              </View>
            </View>
          </TouchableOpacity>

          {/*  Task list */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStrings.PLANNER_STACK, {
                screen: NavigationStrings.PLANNER,
                initial: false,
              })
            }
          >
            <View style={stylesMobile.box}>
              <View style={stylesMobile.boxInside}>
                <View style={stylesMobile.boxHeader}>
                  <Text style={stylesMobile.textHeader}>OPEN TASK</Text>
                </View>

                <TaskList></TaskList>
              </View>
            </View>
          </TouchableOpacity>

          {/*  Messages */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>YOUR MESSAGES</Text>
              </View>

              <Messenger></Messenger>
            </View>
          </View>

          {/*  next tournamnet */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>NEXT TOURNAMENT</Text>
              </View>

              <Games></Games>
            </View>
          </View>

          {/*  Mental */}

          {/*   MENTAL */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>MENTAL </Text>
              </View>

              <Mental></Mental>
            </View>
          </View>

          {/* AACHEN */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>AACHEN</Text>
              </View>

              <Aachen></Aachen>
            </View>
          </View>

          {/*   PLAYER HISTORY */}

          <View style={stylesMobile.boxfull}>
            <View style={stylesMobile.boxInsidefull}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>PLAYER HISTORY </Text>
              </View>

              <PlayerHistory></PlayerHistory>

            </View>
          </View>

          {/* <Text>My WHOOP DAY </Text> */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>My WHOOP DAY </Text>
              </View>

              <WhoopDay></WhoopDay>
            </View>
          </View>

          {/* <Text> Time Managemnt </Text> */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>TIME MANAGEMENT</Text>
              </View>

              <RadarChartScreen
                color={"#FF7F50"}
                data={[
                  { value: 90 },
                  { value: 105 },
                  { value: 115 },
                  { value: 95 },
                  { value: 90 },
                ]}
              />
            </View>
          </View>

          {/*   Fitness test */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>FITNESS PRACTICE</Text>
              </View>

              <Fitness1 />
            </View>
          </View>

          {/*   Golf test */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>GOLF PRACTICE</Text>
              </View>

              <GolfTest></GolfTest>
            </View>
          </View>

          {/*   bag */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>MY BAG </Text>
              </View>

              <Bag></Bag>
            </View>
          </View>

          {/*   ROUND ANALYSIS */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>ROUND ANALYSIS</Text>
              </View>

              <RoundAnalysis />
            </View>
          </View>

          {/*   Par */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>∅ AGAINST PAR</Text>
              </View>

              <AgainstPar />
            </View>
          </View>

          {/*   trackman */}

          <View style={stylesMobile.box}>
            <View style={stylesMobile.boxInside}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>TRACKMAN</Text>
              </View>
              <Trackman></Trackman>
            </View>
          </View>

          {/*   SAM PUTTLAB */}

          <View style={stylesMobile.boxfull}>
            <View style={stylesMobile.boxInsidefull}>
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>SAM PUTTLAB </Text>
              </View>

              <Putlab></Putlab>
            </View>
          </View>

          {/*   Live Practice */}

          <View style={stylesMobile.boxfull}>
            <View
              style={[
                stylesMobile.boxInsidefull,
                { height: Platform.OS === "android" ? 178 : 178 },
              ]}
            >
              <View style={stylesMobile.boxHeader}>
                <Text style={stylesMobile.textHeader}>LIVE PRATICE </Text>
              </View>

              <Workout></Workout>
            </View>
          </View>
          {selecteduser != undefined ? null : (
            <LocationTracking></LocationTracking>
          )}

          {/* end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
