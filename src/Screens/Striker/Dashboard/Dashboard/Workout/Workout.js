import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import * as Animatable from "react-native-animatable";

import Feather from "react-native-vector-icons/Feather";
import colors from "../../../../../assets/colors";
import SubCategories from "./SubCategories/Mobile/SubCategories";

export default function Workout() {
  const [gico, setGico] = useState(true);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);

  const _fetchAthletics = async () => {
    try {
      if (aico == true) {
        setAico(false);
      } else {
        setAico(true);

        setGico(false);
        setNico(false);
        setMico(false);
        setPico(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  const _fetchGolf = async () => {
    try {
      setGico(true);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {gico == true ? (
        <SubCategories></SubCategories>
      ) : (
        <View style={styles.boxContainer}>
          <TouchableOpacity onPress={() => _fetchGolf()}>
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
          <TouchableOpacity>
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
                ) : null}
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
                ) : null}
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
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "space-evenly",

    //padding: 10,
    position: "relative",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    color: "#0000",
    backgroundColor: "transparent",
    //height:5,
    // paddingTop:-30,
    // marginBottom:20,
    // marginTop:-50,
    borderColor: "black",
  },
  event: { color: "#fff", fontSize: 20, borderColor: "#fff", borderWidth: 0.3 },
  weekView: {
    backgroundColor: "transparent",
    width: "100%", //marginTop:80,
    height: "76%",
  },

  hourTextStyle: {
    backgroundColor: "transparent",
    color: "#000",
    marginTop: -10,
    paddingBottom: 20,
  },
  box_oprntask: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,
    flexDirection: "column",
    backgroundColor: colors.fiv_primary,
    borderColor: colors.fiv_primary,

    borderWidth: 3,
  },
  title_box1: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,
    flexDirection: "column",
    backgroundColor: colors.primary,
    borderColor: colors.primary,

    borderWidth: 3,
  },

  title_box2: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,
    flexDirection: "column",
    backgroundColor: colors.fourth_primary,
    borderColor: colors.fourth_primary,

    borderWidth: 3,
  },
  title_box3: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,

    flexDirection: "column",
    backgroundColor: colors.second_primary,
    borderColor: colors.second_primary,

    borderWidth: 3,
  },
  title_box4: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,

    flexDirection: "column",
    backgroundColor: colors.third_primary,
    borderColor: colors.third_primary,

    borderWidth: 3,
  },
  box_text: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  title_text: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  boxContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingTop: 5,
    position: "relative",
    width: "100%",
    marginBottom: -10,
  },
  action: {
    flexDirection: "row",

    padding: 5,
    justifyContent: "center",
    alignSelf: "center",
    height: 45,
    borderColor: colors.boxborder,
    borderWidth: 2,
    width: "95%",
    borderRadius: 15,
  },
});
