import { StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
       alignItems: 'center',
        backgroundColor: 'white',
    },

    searchBar:{
        marginTop: 10,
        borderRadius:30,
        borderWidth:'1',
        borderColor:'black',
        width:'80%'
    },


    separator: {
        height: 1,
        backgroundColor: "#CCCCCC",

    },
    boxContainerTwo: {
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
   
    },

    boxContainerOne:{
        flexDirection: 'row',
        padding: 10,
    },
    boxFirstPart:{
        flexDirection: 'row',
        padding: 10,


    },
    boxSecondPart:{
        padding:10,
        borderColor:'black',
        borderRadius:10,
        borderWidth:'1',
        marginRight:10
        
    },

    image: {
        width: 50,
        height: 50,
        borderRadius: 40,
        marginRight: 10
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    text: {
        fontSize: 15
    },
    smallText: {
        fontSize: 12,
        fontWeight: '100'
    }
});


export default styles;
