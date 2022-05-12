import React from 'react'
import { Image, StyleSheet, Platform } from 'react-native'

export default function DiaryImage() {
  return <Image source={require('../../../../assets/DiaryIconD.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: '70%',
    height: Platform.OS === "android" ? 120 : 140,
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },


})
