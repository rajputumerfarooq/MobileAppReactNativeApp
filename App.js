//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Navigation/Routes";

// Redux
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./src/Store";
import { Provider } from "react-redux";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();





// create a component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};

//make this component available to the app
export default App;
