import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native';
import colors from '../../../../Constants/Colors';


export default function Messenger() {


  const styles = StyleSheet.create({

    scrollContainer: {

      height: 180,
      width: '90%',
      borderRadius: 30,
    

    },
    item: {
      //fontWeight: 'bold',
      fontSize: 10,
      color: colors.text,
   
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
padding:5
    },
    Message: {
      fontSize: 10,
      color: colors.text, padding: 5,
    },
    line: {
      borderBottomWidth: 0.2,
      borderColor: 'gray'
    },

  })



  return (


    <View style={styles.scrollContainer}>
       
     
          <View style={styles.line}>
            <Text style={styles.item}> 27.10.2021             Bekan</Text>
            <Text style={styles.Message}> Greeting Player. Your coach will not be available</Text>
          </View>
          
    </View>

  )
}


