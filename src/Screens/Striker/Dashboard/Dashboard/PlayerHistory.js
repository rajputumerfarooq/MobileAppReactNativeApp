import React from "react";
import { View, StyleSheet, Platform, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default function PlayerHistory() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",

          paddingTop: 5,
        }}
      >
        <View
          style={{
            width: "20%",
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
              ROUNDS{" "}
            </Text>
          </View>
          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>920</Text>
            </ProgressCircle>
          </View>
        </View>

        <View
          style={{
            width: "20%",
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
              WAGR{" "}
            </Text>
          </View>
          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>920</Text>
            </ProgressCircle>
          </View>
        </View>

        <View
          style={{
            width: "20%",
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
              EGR
            </Text>
          </View>
          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>920</Text>
            </ProgressCircle>
          </View>
        </View>

        <View
          style={{
            width: "20%",
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
              DGV{" "}
            </Text>
          </View>
          <View style={{ padding: 4 }}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>920</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          margin: 10,
          paddingTop: 10,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, color: "white", marginBottom: 5 }}>
            {" "}
            Best Results{" "}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}> Best Results </Text>
          <Text style={{ fontSize: 12 }}> Played Rounds</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 5 }}>
            {" "}
            Practice National{" "}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>1</Text>
          <Text style={{ fontSize: 12 }}>2</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 12, fontWeight: "bold", marginBottom: 5 }}>
            {" "}
            Practice International{" "}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>T4</Text>
          <Text style={{ fontSize: 12 }}>22</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: Platform.OS === "android" ? 130 : 130,
    //paddingLeft:20,
    marginRight: Platform.OS === "android" ? 6 : 6,
    marginTop: Platform.OS === "android" ? 6 : 6,
    // borderRadius: 80,
  },

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
