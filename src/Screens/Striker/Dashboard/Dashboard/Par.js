import React from 'react'
import { Image, StyleSheet, Platform, View } from 'react-native'
import AgainstPar from './AgainstPar'

export default function Par() {
  return (

    <View style={styles.image}>
          <AgainstPar></AgainstPar>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,

    height: Platform.OS === "android" ? 150 : 180,
    
    margin: Platform.OS === "android" ? 4 : 4,
   // borderRadius: 80,
  },


})