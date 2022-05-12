
import { StyleSheet,Dimensions } from "react-native";
import colors from "../../../../../../../assets/colors";
 
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
  
    },

    box_oprntask: {
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 55,
      width: Platform.OS === "android" ? 70 : 60,
      flexDirection: 'column',
      backgroundColor:colors.fiv_primary, 
      borderColor: colors.fiv_primary,

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
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 55,
      width: Platform.OS === "android" ? 70 : 60,
      flexDirection: 'column',
      backgroundColor: colors.primary, borderColor: colors.primary,

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
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 55,
      width: Platform.OS === "android" ? 70 : 60,
      flexDirection: 'column',
      backgroundColor: colors.fourth_primary, borderColor: colors.fourth_primary,

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
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 55,
      width: Platform.OS === "android" ? 70 : 60,

      flexDirection: 'column',
      backgroundColor: colors.second_primary, borderColor: colors.second_primary,

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
      borderRadius: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 55,
      width: Platform.OS === "android" ? 70 : 60,

      flexDirection: 'column',
      backgroundColor: colors.third_primary, borderColor: colors.third_primary,

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

      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'

  },
  title_text: {

      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff'

  },
  boxContainerRow: {
      //backgroundColor: colors.third_primary,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
       padding: 5,
      position: 'relative',
      width: '100%',
    //  marginBottom: 10,

  },
  
    boxContainer:{
        marginTop: 16,
         width:'45%',
         height:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:30,

    },
    separator: {
        height: 1,
       // backgroundColor: "#CCCCCC",

    },
      image: {
    flex: 1,
    justifyContent: "center"
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
    borderRadius: 30,
    // alignSelf: "center",
    alignItems: "center",
    // justifyContent: "center",
    height: Platform.OS === "android" ? 200: 200,

    width:
      Platform.OS === "android"
        ? Dimensions.get("window").width / 2 - 5
        : Dimensions.get("window").width / 2 - 5,

    // marginBottom:
    //   (Dimensions.get("window").width -
    //     (Dimensions.get("window").width - 10)) /
    //   3,
    //  flexDirection: "row",
    //  flexWrap: "wrap",
    marginLeft: 10,

    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 2,
  },

  boxHeader: {

    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',

    paddingBottom: 5,
    alignSelf: "center",
    alignItems: "center",

    justifyContent: "center",
    height: Platform.OS === "android" ? 30 : 32,
    width: "100%",
    backgroundColor: 'rgba(122,181,29,.25)',
  },
});

const stylesMobile = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: 30,
    // alignSelf: "center",
    alignItems: "center",
    // justifyContent: "center",
    height: Platform.OS === "android" ? 200 : 200,
    width:
      Platform.OS === "android"
        ? Dimensions.get("window").width / 2 - 5
        : Dimensions.get("window").width / 2 - 5,
    marginBottom:
      (Dimensions.get("window").width -
        (Dimensions.get("window").width - 10)) /
      3,

    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 3,
  },
  boxHeader: {
    // borderTopRightRadius: Platform.OS === "android" ? 30 : 34,
    // borderTopLeftRadius: Platform.OS === "android" ? 30 : 34,
    // borderColor: "#000000",
    // borderWidth: 1,
    // paddingBottom: 5,
    // alignSelf: "center",
    // alignItems: "center",

    // justifyContent: "center",
    // height: Platform.OS === "android" ? 30 : 32,
    // width: "100%",
    // backgroundColor: "#fff",

    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',

    paddingBottom: 5,
    alignSelf: "center",
    alignItems: "center",

    justifyContent: "center",
    height: Platform.OS === "android" ? 30 : 32,
    width: "100%",
    backgroundColor: 'rgba(122,181,29,.25)',
  },

});



export default styles;