import { StyleSheet } from "react-native";
import colors from "../../../../../assets/colors";


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'space-evenly',
         

        //padding: 10,
        position: 'relative',
        width: '100%',
        backgroundColor: '#fff',

    },
    header: { color: '#0000',
     backgroundColor: 'transparent',
      //height:5,
     // paddingTop:-30,
     // marginBottom:20,
     // marginTop:-50,
       borderColor: 'black',  },
    event: { color: '#fff', fontSize: 20, borderColor: '#fff', borderWidth: 0.3, },
    weekView: { 
        backgroundColor: 'transparent', width: '100%', //marginTop:80,
    height:   '76%' },

    hourTextStyle: { backgroundColor: 'transparent', color: '#000', marginTop: -10, paddingBottom: 20, } 
    ,

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
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff'

    },
    boxContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingTop: 5,
        position: 'relative',
        width: '100%',
        marginBottom: -10,

    },
    action: {


        flexDirection: 'row',

        padding: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 45,
        borderColor: colors.boxborder,
        borderWidth: 2,
        width: '95%',
        borderRadius: 15,
    },
});


export default styles;