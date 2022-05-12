//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import ProgressCircle from "react-native-progress-circle";
import colors from "../../../../../Constants/Colors";

// create a component
const TrackmanComponent = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",

          paddingTop: 5,
        }}
      >
        <View
          style={{
            width: "45%",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            height: 60,
            borderColor: "rgba(128, 150, 95, 0.25)",
          }}
        >
          <View
            style={{
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 15,
              backgroundColor: "rgba(128, 150, 95, 0.25)",
            }}
          >
            <Text style={styles.item}> Combine </Text>
          </View>

          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={30}
              radius={14}
              borderWidth={3}
              color={colors.primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>81.6</Text>
            </ProgressCircle>
            <Text style={{fontSize:7, textAlign:'center', marginTop:1}}>Ø 26</Text>
          </View>
        </View>

        <View
          style={{
            width: "45%",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            height: 60,
            borderColor: "rgba(128, 150, 95, 0.25)",
          }}
        >
          <View
            style={{
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 15,
              backgroundColor: "rgba(128, 150, 95, 0.25)",
            }}
          >
            <Text style={[styles.item, { padding: 0, paddingTop: 2 }]}>
              {" "}
              Recovery{" "}
            </Text>
          </View>

          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={14}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>67</Text>
            </ProgressCircle>
            <Text style={{fontSize:7, textAlign:'center', marginTop:1}}>Ø 26</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",

          paddingTop: 5,
        }}
      >
        <View
          style={{
            width: "45%",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            height: 60,
            borderColor: "rgba(128, 150, 95, 0.25)",
          }}
        >
          <View
            style={{
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 15,
              backgroundColor: "rgba(128, 150, 95, 0.25)",
            }}
          >
            <Text style={styles.item}>Shots Over 90</Text>
          </View>

          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={30}
              radius={14}
              borderWidth={3}
              color={colors.primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>81.6</Text>
            </ProgressCircle>
            <Text style={{fontSize:7, textAlign:'center', marginTop:1}}>Ø 67</Text>
          </View>
        </View>

        <View
          style={{
            width: "45%",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            height: 60,
            borderColor: "rgba(128, 150, 95, 0.25)",
          }}
        >
          <View
            style={{
              width: "100%",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              height: 15,
              backgroundColor: "rgba(128, 150, 95, 0.25)",
            }}
          >
            <Text style={[styles.item, { padding: 0, paddingTop: 2 }]}>
              {" "}
              Longest Drive{" "}
            </Text>
          </View>

          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={14}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>67</Text>
            </ProgressCircle>
            <Text style={{fontSize:7, textAlign:'center', marginTop:1}}>Ø 26</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  scrollContainer: {
    height: 100,
    width: "100%",
    // flexDirection:'row',
    //flexWrap:'wrap',
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 2,
    fontSize: 9,
    // fontWeight:'bold',
    color: colors.text,
    alignSelf: "center",
  },
  Message: {
    fontSize: 10,
    color: colors.text,
  },
  line: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: colors.boxborder,
  },
});

//make this component available to the app
export default TrackmanComponent;
