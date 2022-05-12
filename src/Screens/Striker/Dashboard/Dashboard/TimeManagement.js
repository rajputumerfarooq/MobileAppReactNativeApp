import React from 'react'
import { Image, StyleSheet, Platform } from 'react-native'
import RadarChartScreen from './RadarChartScreen'

export default function TimeManagement() {

  const data = [{value: 90}, {value: 105}, {value: 115}, {value: 95}, {value: 90}] 
  return  <RadarChartScreen data={data}/>;
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: Platform.OS === "android" ? 120 : 120,
    
    margin: Platform.OS === "android" ? 4 : 4,
   // borderRadius: 80,
  },


})