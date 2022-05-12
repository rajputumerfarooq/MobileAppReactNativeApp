//import liraries
import React, { Component, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
//Navigation
import { useNavigation } from "@react-navigation/native";
//Redux
import { useSelector } from "react-redux";
import { RemoveExercise } from "../../../../../../Store/ExerciseReducer/type";
import { useDispatch } from "react-redux";
// create a component
const ViewExercise = () => {
  // Constants
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Getting state values from redux store
  const { exercises } = useSelector((state) => {
    return {
      exercises: state.exerciseReducer.exercises,
    };
  });

  //Functions
 const renderExercise = ({ item }) => (
    <View
      style={{
        
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: 20,
        borderRadius: 30
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center",  }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            marginBottom: 5,
            paddingTop: 10,
            color: "#000",
          }}
        >
          {item.name}
        </Text>
      </View>

      <View style={{ flexDirection:'row', }}>

          <View style={{flex:.3}}>
           <Image style={{ height: 110, width: 110 , resizeMode:'contain'}} source={{ uri: item.gif }} />
          </View>

        
        <View style = {{flex:.7 ,flexDirection:'column', }}>
       
       
        <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontSize:16}} >Sets:</Text>
            <Text style={{fontSize:16}}>{item.sets}</Text>
        </View>

        <View style={{flexDirection:'row',  justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontSize:16}} >Repetition:</Text>
            <Text style={{fontSize:16}}>{item.reps}</Text>
        </View>

        <View style={{flexDirection:'row',   justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontSize:16}} >Starting Weight (Kg):</Text>
            <Text style={{fontSize:16}}>{item.startingWeightKg}</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontSize:16}} >Increasing Weight (kg):</Text>
            <Text style={{fontSize:16}}>{item.increaseWeightKg}</Text>
        </View>

        <View style={{flexDirection:'row',  justifyContent:'space-between', marginRight:20}}>
            <Text style={{fontSize:16}} >Rest Time (kg):</Text>
            <Text style={{fontSize:16}}>{item.maxRestMinutes}</Text>
        </View>

         </View>
      </View>


      <TouchableOpacity
        onPress={ () => {
          dispatch({ type: RemoveExercise, payload: item.id });
        }}
        style={{ width:'80%', padding:10, alignItems:'center' }}
      >
        <View>
          <Text style={{fontSize:18, color:"#f44336"}}>
            Dellete ?
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {

  }, []);

  return (
    <View style={styles.container}>
      {/* Header     */}
      <View style={{ flexDirection: "row", marginTop: 10, flex: 0.15 }}>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 0, marginLeft: 20 }}
          >
            <Ionicons name="arrow-back-sharp" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Selected Exercises
          </Text>
        </View>
      </View>

      {/* Body */}
      <View style={{ marginTop: 10, flex: 0.75 }}>
        <FlatList data={exercises} renderItem={renderExercise} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,

 
  },
});

//make this component available to the app
export default ViewExercise;
