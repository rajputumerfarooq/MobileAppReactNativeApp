//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
// create a component
const Test = () => {
  const [weatherData, setWeatherData] = useState("");

  const API_KEY = "1d043e917d70a55e0a27385c2db8ddcf";
  const fetchWeatherData = async (cityName) => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const result = await axios.get(API);
   
    setWeatherData(result);
  };

  

  useEffect(() => {
    fetchWeatherData("Mumbai");
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {" "}
        {weatherData == "" ? "NO DATA" : weatherData.data.main.feels_like}
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default Test;
