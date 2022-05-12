//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis
} from "victory-native";
import theme from "./Workout/BarChartTheme";

// create a component
const BarChartScreen1 = () => {
  return (
    <View style={styles.container}>
      <VictoryChart
        width={350}
        height={180}
        theme={VictoryTheme.material}
        domainPadding={{ x: [18, 0], y: 0 }}

      >
        <VictoryBar
          width={350}
          height={180}
          data={[
            { x: "Tendency", y: 58 },
            { x: "Timing", y: 49 },
            { x: "Consistency", y: 59 },
            { x: "Overall", y: 100 },
          ]}

          style={{
            data: {
              fill: ({ datum }) => {
                return datum.y < 50 ? "#FF6347" : "green";
              },

              fillOpacity: 1,
              strokeWidth: .5,
            },

            labels: {
              fontSize: 15,
              fill: ({ datum }) => (datum.x === 3 ? "#000" : "#000"),
            },
          }}
          labels={({ datum }) => datum.y}
        />

      </VictoryChart>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default BarChartScreen1;
