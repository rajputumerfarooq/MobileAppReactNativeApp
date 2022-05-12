


import { StyleSheet,Platform } from 'react-native';
import colors from '../../../assets/colors';



// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a7aaa7',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
       // marginTop: -10,
    },
     
    header: {
        flex: 0.5,
        marginTop: 20,
        alignSelf: 'center',
        justifyContent: 'flex-start',
      //  paddingHorizontal: 10,
        //paddingBottom: 10
    }, 
    footer: {
        flex: 5,
     
       
        backgroundColor: '#fff',
        borderRadius: 30,
        //borderTopRightRadius: 30,
        paddingHorizontal: 20,
       paddingVertical: 20,
        margin:20,
        marginBottom:  Platform.OS === 'ios' ? 30 : 30,
    },
    textInput: {
        flex: 1,
        height:40,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 10,
        color: '#05375a',
        borderColor:'#ced4da',
        borderWidth:1,
        borderRadius: 10,
       
    }, 
    
    icon:{
        margin:  10,
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: colors.text,
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
      //  borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        marginBottom: 10
    },

    dobBox: {
        flexDirection: 'row',
        marginTop: 10,
       borderWidth: 1,
       borderColor:'#ced4da',
       borderWidth:1,
       borderRadius: 10,
       marginRight:70,
       marginBottom: 10
        
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    uploadbtn: {
        width: '100%',
        height: 50,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: colors.text
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});
export default styles;