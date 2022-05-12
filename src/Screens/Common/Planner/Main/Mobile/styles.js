import { StyleSheet } from "react-native";
import colors from "../../../../../Constants/Colors";
import { Dimensions } from "react-native";

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "space-evenly",

    //marginTop:20,
    paddingTop: 5,
    position: "relative",
    width: "100%",
    //  marginBottom: 20,
  },
  inputtext: {
    backgroundColor: "transparent",
    color: colors.text,
    width: "100%",

    height: 45,
    marginTop: -8,
  },
  scrollContainer: {
    width: "100%",

    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  scroll: {
    width: "100%",
    marginTop: 0,
  },



  

  box_oprntask: {
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS === "android" ? 80 : 80,
    width: Platform.OS === "android" ? 70 : 70,
    flexDirection: "column",
    backgroundColor: "#43caca",
    borderColor: "#43caca",

    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
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
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  boxContainer: {
    //backgroundColor: colors.third_primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // paddingTop: 30,
    position: "relative",
    width: "95%",
    margin: 5,
    // marginBottom: 10,
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

  dropdown: {
    //flexDirection: 'row',

    padding: 10,
    justifyContent: "center",
    alignSelf: "center",
    height: 45,
    borderColor: colors.boxborder,
    borderWidth: 2,
    width: "95%",
    borderRadius: 15,
  },

  actionBox: {
    flexDirection: "row",

    padding: 20,
    justifyContent: "center",
    alignSelf: "flex-start",

    borderColor: colors.boxborder,

    width: "95%",
    borderRadius: 15,
  },
  textbox: {
    flexDirection: "row",

    justifyContent: "center",
    alignSelf: "center",

    borderColor: colors.boxborder,
    borderWidth: 2,
    width: "95%",
    borderRadius: 15,
  },
  exercises: {
    height: 70,

    justifyContent: "flex-start",
    width: "100%",
    borderRadius: 15,
    borderWidth: 2,
    padding: 5,
    borderColor: colors.boxborder,

    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    marginLeft: 0,
    width: "30%",
    height: "100%",
  },
  header: {
    height: 40,
    paddingLeft: 20,
    justifyContent: "center",

    borderWidth: 3,
    borderColor: colors.border,
    width: 110,
  },
  text_footer: {
    color: colors.text,
    fontSize: 18,
    paddingLeft: 10,
    alignSelf: "flex-start",
  },
  Label: {
    color: colors.text,
    fontSize: 18,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    alignSelf: "flex-start",
  },
  dropdownDate: { width: "90%", padding: 5, justifyContent: "center" },
  textdatedropdown: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: colors.text,
    width: "100%",
    //height: 80,
    fontSize: 16,
    justifyContent: "center",
  },
  textdatemodel: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: colors.text,
    width: "100%",

    justifyContent: "center",
  },

  button: {
    //  marginTop:-150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  signIn: {
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },

  boxContainerRow: {
    //backgroundColor: colors.third_primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    padding: 5,
    position: "relative",
    width: "100%",
    marginBottom: 10,
  },

  // NEW CSS
  gExerciseSelectorBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 0.17,
    height: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },

  aExerciseSelectorBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.fourth_primary,
    flex: 0.17,
    height: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  nExerciseSelectorBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.second_primary,
    flex: 0.17,
    height: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  mExerciseSelectorBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.third_primary,
    flex: 0.17,
    height: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
  pExerciseSelectorBox: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#43caca",
    flex: 0.17,
    height: "80%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
  },
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
      (Dimensions.get("window").width - (Dimensions.get("window").width - 10)) /
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
    height: Platform.OS === "android" ? 120 : 120,
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

  //STAR AND END TIME box

  boxfulltime: {
    padding: 4,
    borderRadius: 10,

    alignItems: "center",

    height: Platform.OS === "android" ? 270 : 270,
    width:
      Platform.OS === "android"
        ? Dimensions.get("window").width - 22
        : Dimensions.get("window").width - 22,
    marginBottom:
      (Dimensions.get("window").width - (Dimensions.get("window").width - 10)) /
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

  boxInsidefulltime: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(122, 181, 29, 0.25)",
    height: Platform.OS === "android" ? 260 : 260,
  },

  //Location box

  boxfullLocation: {
    padding: 4,
    borderRadius: 10,

    alignItems: "center",

    height: Platform.OS === "android" ? 170 : 170,
    width:
      Platform.OS === "android"
        ? Dimensions.get("window").width - 22
        : Dimensions.get("window").width - 22,
    marginBottom:
      (Dimensions.get("window").width - (Dimensions.get("window").width - 10)) /
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

  boxInsidefullLocation: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(122, 181, 29, 0.25)",
    height: Platform.OS === "android" ? 160 : 160,
  },
});

export default styles;
