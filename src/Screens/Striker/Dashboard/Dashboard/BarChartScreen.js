//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart, StackedBarChart } from "react-native-chart-kit";
// create a component
const BarChartScreen = () => {
  const data = {
    labels: ["Tendency", "Timing", "Consistency", "Overall", ],
    datasets: [
      {
        data: [20, 45, 28, 80,],
      },
    ],
  };


  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
   
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <BarChart
        style={styles.container}
        data={data}
        width={350}
        height={120}
        fromZero={true}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        withHorizontalLabels={true}
    
        showValuesOnTopOfBars={true}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

//make this component available to the app
export default BarChartScreen;
