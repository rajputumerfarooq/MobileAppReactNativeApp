
import { StyleSheet} from 'react-native';



// define your styles
const styles = (height_logo) => StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2, 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        paddingTop: 40,
    },
    logo: {
        width: '80%',
        height: height_logo
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row'
    },
    textSign: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default styles;