import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, processColor
} from 'react-native';

import {RadarChart} from 'react-native-charts-wrapper';

export default class Radar_Chart extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <RadarChart style={styles.chart}
      //      data={{dataSets:[{label: "", values: [0,0,2,0]}]}}
data={
            
  { dataSets: [
    {
      label: "Strength",
      backgroundColor: "#a5d171",
      borderColor: "#a5d171",
      fill: false,
      borderWidth: 1,
      pointBackgroundColor: "#a5d171",
      poingBorderColor: "#a5d171",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      values: [200, 170, 180, 190, 50, 20, 1],
    },
    {
      label: "Streching",
      backgroundColor: "#fbb900",
      borderColor: "#fbb900",
      fill: false,
      borderWidth: 1,
      pointBackgroundColor: "#fbb900",
      poingBorderColor: "#fbb900",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      values: [120, 55, 78, 50, 25, 130, 25],
    },
    {
      label: "Cardio",
      backgroundColor: "#0069b4",
      borderColor: "#0069b4",
      fill: false,
      borderWidth: 1,
      pointBackgroundColor: "#0069b4",
      pointBorderColor: "#0069b4",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(34, 202, 236, 1)",
      values: [100, 160, 30, 50, 20, 10, 99],
    },
  ],}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    
  },
  chart: {
    flex: 1,



    
  }
});
