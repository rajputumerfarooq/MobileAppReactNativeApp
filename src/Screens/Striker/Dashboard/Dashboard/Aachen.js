import React from 'react'
import { Image, StyleSheet, Platform } from 'react-native'

export default function Aachen() {
  return <Image source={require('../../../../assets/aachen.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: Platform.OS === "android" ? 120 : 120,
    
    margin: Platform.OS === "android" ? 4 : 4,
   // borderRadius: 80,
  },


})