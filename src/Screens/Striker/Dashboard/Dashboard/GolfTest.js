import React from 'react'
import { Image, StyleSheet, Platform } from 'react-native'
import RadarChartScreen from './RadarChartScreen'
// Radar Chart 


export default function GolfTest() {

  const data = [{value: 80}, {value: 110}, {value: 105}, {value: 95}, {value: 110}] 
  return <RadarChartScreen color={"green"} data={data}/>
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: Platform.OS === "android" ? 120 : 120,
    
    margin: Platform.OS === "android" ? 4 : 4,
   // borderRadius: 80,
  },


})