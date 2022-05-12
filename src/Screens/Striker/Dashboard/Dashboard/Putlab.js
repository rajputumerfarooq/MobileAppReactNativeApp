import React from 'react'
import { Image, StyleSheet, Platform } from 'react-native'
import BarChartScreen1 from './BarChartScreen1';
export default function Putlab() {
  return <BarChartScreen1/>
}

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: Platform.OS === "android" ? 130 : 130,
      //paddingLeft:20,
      marginRight: Platform.OS === "android" ? 6 : 6,
      marginTop: Platform.OS === "android" ? 6 : 6,
     // borderRadius: 80,
    },
  
  
  })