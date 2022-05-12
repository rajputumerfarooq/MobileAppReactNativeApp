import { StyleSheet, StatusBar } from 'react-native';
import {
    
    Dimensions,
    Platform
    
  } from "react-native";
const styles = StyleSheet.create({
    root: {
        backgroundColor: "#FFFFFF",
    },
    container: {
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 5,
       // padding: 16,
        flexDirection: "row",
        //borderBottomWidth: 1,
        borderColor: "#FFFFFF",
        alignItems: "flex-start",
        paddingBottom: 30,
        backgroundColor: "#FFFFFF",
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 25,
    },

    content: {
       
     marginLeft: 16,
      
    },

    mainContent: {
 

    },

    memberImage: {
        height: 30,
        width: 30,
        marginRight: 4,
        borderRadius: 10,
    },

    separator: {
        height: 1,
        backgroundColor: "#CCCCCC",

    },

    countMembers: {
        color: "#20B2AA",
    },
    
    timeAgo: {
        fontSize: 12,
        color: "#696969",
    },
    groupName: {
        fontSize: 23,
        color: "#1E90FF",
    },
    groupMembersContent: {
        flexDirection: "row",
        marginTop: 10,
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

    boxContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: 40,
        position: "relative",
        width: "100%",
    },
   
    text: {
     
        flexDirection: "row",
        flexWrap: "wrap",
        color: colors.text,
        fontSize: 14,
        fontWeight: "bold",
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        padding: 5,
        justifyContent: "center",

        borderColor: "#000000",
        borderWidth: 1,
        width: 350,
        borderRadius: 10,
    },

    boxfull: {

        alignSelf: "center",
        alignItems: "center",
        flexWrap: "wrap",
         padding:4,
        borderRadius: 10,
        height: Platform.OS === "android" ? 130 : 130,
        width:
          Platform.OS === "android"
            ? Dimensions.get("window").width  - 36
            : Dimensions.get("window").width  - 36,
        marginBottom:-5
          ,
        backgroundColor:'#fff',
        borderColor: "#000000",
         borderWidth: 1,
         margin:4,
        shadowOpacity: 0.3,
      shadowRadius: 5,
      shadowOffset: {
        height: 10,
        width: 10,
    
      },
    },
    header: {
        padding: 5,
        backgroundColor: 'rgba(122, 181, 29, 0.25)',            
        justifyContent: "flex-start",
        flexDirection: "row",
        borderWidth: 0.5,
        borderColor: '#000000',

        width: 100,
    },
   
   
    boxHeader: {
        paddingBottom: 10,
       // paddingTop: 10,
        alignItems: "center",
    },
});

// Exporting the object
export default styles;