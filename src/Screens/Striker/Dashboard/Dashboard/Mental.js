import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native';
import colors from '../../../../Constants/Colors';


export default function Mental() {


  const styles = StyleSheet.create({

    scrollContainer: {

      height: 180,
      width: '90%',
      borderRadius: 30,
    

    },
    item: {
      fontWeight: 'bold',
      fontSize: 10,
      color: colors.text,
   
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
padding:5
    },
    Message: {
      fontSize: 11,
      color: colors.text, padding: 10,
    },
    line: {
      borderBottomWidth: 0.2,
      borderColor: 'gray'
    },

  })



  return (


    <View style={styles.scrollContainer}>
       
     
          <View style={styles.line}>
            <Text style={styles.item}> REMEMBER</Text>
            <Text style={styles.Message}> It's such a psycological and mental game, golf, that the smallest wrong thing at the wrong time can distract you from what you're trying to achieve Lee Westwood</Text>
          </View>
           
    </View>

  )
}


