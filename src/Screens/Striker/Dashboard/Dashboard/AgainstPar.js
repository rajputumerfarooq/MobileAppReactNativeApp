//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryAxis,
} from "victory-native";
import theme from "./Workout/BarChartTheme";

// create a component
const AgainstPar = () => {
  return (
    <View style={styles.container}>
      <VictoryChart width={220} height={150}>
        <VictoryBar
          categories={{
            x: ["Par 3", "Par 4", "Par 5"],
          }}

          data={[
            { x: "Par 3", y: 58 },
            { x: "Par 4", y: 49 },
            { x: "Par 5", y: 59 },
          ]}

          style={{
            data: {
              fill: ({ datum }) => {
                let color = "temp";

                if ("Par 3" == datum.x) return "#ffa500";
                else if ("Par 4" == datum.x) return "#00FF7F";
                else return "#0000CD";
              },

              fillOpacity: 0.7,
              strokeWidth: 0.2,
            },

            labels: {
              fontSize: 15,
              fill: ({ datum }) => (datum.x === 3 ? "#000" : "#000"),
            },
          }}
          labels={({ datum }) => datum.y}
        />
        <VictoryAxis
          crossAxis={false}
          style={{
            axis: {
              stroke: "white", //CHANGE COLOR OF X-AXIS
            },
          }}
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
export default AgainstPar;
