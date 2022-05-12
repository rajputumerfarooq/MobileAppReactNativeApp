import { StyleSheet } from "react-native";
import colors from "../../../../../Constants/Colors";


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'space-evenly',

//marginTop:20,
        paddingTop: 5,
        position: 'relative',
        width: '100%',
      //  marginBottom: 20,
    },
    inputtext:{
        backgroundColor: 'transparent',
                            color: colors.text,
                            width: '100%',
                              
                             
                            
                             height:45,
                             marginTop:-8
                             
    },
    scrollContainer: {


        width: '100%',

        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',

    },

    scroll: {
        width: '100%',
        marginTop: 0,
    },  
    box_oprntask: {
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: Platform.OS === "android" ? 80 : 80,
        width: Platform.OS === "android" ? 70 : 70,
        flexDirection: 'column',
        backgroundColor:'#c58817', 
        borderColor: '#c58817',

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
    boxContainer: {
        //backgroundColor: colors.third_primary,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
       // paddingTop: 30,
        position: 'relative',
        width: '95%',
        margin:5
       // marginBottom: 10,

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

    dropdown: {


        //flexDirection: 'row',

        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 45,
        borderColor: colors.boxborder,
        borderWidth: 2,
        width: '95%',
        borderRadius: 15,
    },

    actionBox: {


        flexDirection: 'row',

        padding: 20,
        justifyContent: 'center',
        alignSelf: 'flex-start',

        borderColor: colors.boxborder,

        width: '95%',
        borderRadius: 15,
    },
    textbox: {


        flexDirection: 'row',


        justifyContent: 'center',
        alignSelf: 'center',

        borderColor: colors.boxborder,
        borderWidth: 2,
        width: '95%',
        borderRadius: 15,
    },
    exercises: {
        height: 70,

        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 15,
        borderWidth: 2,
        padding: 5,
        borderColor: colors.boxborder,

        flexDirection: 'row',
        flexWrap: 'wrap',



    },
    image: {
        marginLeft: 0,
        width: '30%',
        height: '100%',

    },
    header: {
        height: 40,
        paddingLeft: 20,
        justifyContent: 'center',


        borderWidth: 3,
        borderColor: colors.border,
        width: 110
    }, text_footer: {
        color: colors.text,
        fontSize: 18,
        paddingLeft: 10,
        alignSelf: 'flex-start',
    },
    Label: {
        color: colors.text,
        fontSize: 18,
        paddingLeft: 10,
        paddingTop:20,
        paddingBottom:10,
        alignSelf: 'flex-start',
    },
    dropdownDate:{width: '90%',
    padding: 5,
    justifyContent: 'center'},
textdatedropdown:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.text,
    width: '100%',
    //height: 80,
    fontSize: 16,
    justifyContent: 'center'
},
textdatemodel:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: colors.text,
    width: '100%',

    justifyContent: 'center'},

    button: {
     //  marginTop:-150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    signIn: {
        width: '90%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }

})



export default styles;