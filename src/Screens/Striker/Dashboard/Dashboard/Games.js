import React from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native';
import colors from '../../../../Constants/Colors';
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function Games() {


  const styles = StyleSheet.create({

    scrollContainer: {


      width: '100%',

      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',

    }, item: {
      fontSize: 10,
      color: colors.text,
      paddingBottom: 5,
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
padding:2
  },
    Message: {
      fontSize: 10,
      color: colors.text
    },
    line: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: colors.text
    },

  })

  return (

    <View style={styles.scrollContainer}>

     
<View  style={{flexDirection:'row'}}>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>The Barstool Qualifier </Text>
</View>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>30/09/21 to 05/09/21 </Text>
</View>
<View style={{flexDirection:'column',width:'20%'}}>
<FontAwesome
   style={{padding:5}}
    name="lightbulb-o"
    color='green'
    size={15}
  />
</View>


</View>
<View  style={{flexDirection:'row'}}>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>The Barstool Qualifier </Text>
</View>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>30/09/21 to 05/09/21 </Text>
</View>
<View style={{flexDirection:'column',width:'20%'}}>
<FontAwesome
   style={{padding:5}}
    name="lightbulb-o"
    color='orange'
    size={15}
  />
</View>


</View>
<View  style={{flexDirection:'row'}}>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>The Barstool Qualifier </Text>
</View>

<View style={{flexDirection:'column',width:'40%'}}>
<Text style={styles.item}>30/09/21 to 05/09/21 </Text>
</View>
<View style={{flexDirection:'column',width:'20%'}}>
<FontAwesome
   style={{padding:5}}
    name="lightbulb-o"
    color='green'
    size={15}
  />
</View>


</View>
 

 
        
    </View>

  )
}


