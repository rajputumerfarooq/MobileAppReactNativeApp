
import { StyleSheet } from "react-native";

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'#fff'

  
    },
    box_oprntask: {
      borderRadius: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 80,
      width: Platform.OS === "android" ? 70 : 70,
      flexDirection: 'column',
      backgroundColor:colors.fiv_primary, 
      borderColor: colors.fiv_primary,

      borderWidth: 3,



  },

  title_box1: {
      borderRadius: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 80,
      width: Platform.OS === "android" ? 70 : 70,
      flexDirection: 'column',
      backgroundColor: colors.primary, borderColor: colors.primary,

      borderWidth: 3,



  },

  title_box2: {
      borderRadius: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 80,
      width: Platform.OS === "android" ? 70 : 70,
      flexDirection: 'column',
      backgroundColor: colors.fourth_primary, borderColor: colors.fourth_primary,

      borderWidth: 3,



  },
  title_box3: {
      borderRadius: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 80,
      width: Platform.OS === "android" ? 70 : 70,

      flexDirection: 'column',
      backgroundColor: colors.second_primary, borderColor: colors.second_primary,

      borderWidth: 3,



  },
  title_box4: {
      borderRadius: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: Platform.OS === "android" ? 80 : 80,
      width: Platform.OS === "android" ? 70 : 70,

      flexDirection: 'column',
      backgroundColor: colors.third_primary, borderColor: colors.third_primary,

      borderWidth: 3,



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
  boxContainerRow: {
      //backgroundColor: colors.third_primary,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      padding: 5,
      position: 'relative',
      width: '100%',
      marginBottom: 10,

  },
  
});



export default styles;