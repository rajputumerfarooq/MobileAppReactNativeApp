//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import ProgressCircle from 'react-native-progress-circle';
import colors from '../../../../../Constants/Colors';
const data = {
    labels: [ "Run"], // optional
    data: [0.4,]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


// create a component
const RoundAnalysisComponent = () => {
    return (
        <View  >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
  
          paddingTop: 5,
        }}>
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={styles.item}> Ø FIR </Text>
            </View>
  
            <View style={{padding:4}}>
            <ProgressCircle
              percent={30}
              radius={16}
              borderWidth={3}
              color={colors.primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>81.6</Text>
            </ProgressCircle>
            </View>
             
  
          </View>
  
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={[styles.item,{padding:0,paddingTop:2}]}> Ø GIR </Text>
            </View>
  
            <View style={{padding:4}}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>920</Text>
            </ProgressCircle>
  
            </View>
             
          </View>
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={styles.item}> Ø SC </Text>
            </View>
           <View style={{padding:4}}>
             <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.third_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>50</Text>
            </ProgressCircle></View>
            
  
  
            {/* <Text style={styles.item}>{whoopValues.WhoopSleepData.NeedSleep}</Text>
            <Text style={styles.item}>Need sleep</Text>
   */}
  
  
          </View>
        </View>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
  
          paddingTop: 5,
        }}>
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={styles.item}> Ø CR </Text>
            </View>
  
            <View style={{padding:4}}>
            <ProgressCircle
              percent={30}
              radius={16}
              borderWidth={3}
              color={colors.primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>70.6</Text>
            </ProgressCircle>
            </View>
             
  
          </View>
  
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={[styles.item,{padding:0,paddingTop:2}]}> Ø P </Text>
            </View>
  
            <View style={{padding:4}}>
            <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.second_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>30</Text>
            </ProgressCircle>
  
            </View>
             
          </View>
          <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
            <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
            <Text style={styles.item}> Ø PL </Text>
            </View>
           <View style={{padding:4}}>
             <ProgressCircle
              percent={20}
              radius={16}
              borderWidth={3}
              color={colors.third_primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <Text style={styles.item}>90</Text>
            </ProgressCircle></View>
            
  
  
            {/* <Text style={styles.item}>{whoopValues.WhoopSleepData.NeedSleep}</Text>
            <Text style={styles.item}>Need sleep</Text>
   */}
  
  
          </View>
        </View>
        </View>
  
    );
};


// define your styles
const styles = StyleSheet.create({

    scrollContainer: {

      height: 100,
      width: '100%',
      // flexDirection:'row',
      //flexWrap:'wrap',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',

    },
    item: {
      padding:2,
      fontSize: 9,
 // fontWeight:'bold',
      color: colors.text,
      alignSelf: 'center',
    },
    Message: {
      fontSize: 10,
      color: colors.text
    },
    line: {
      width: '100%',
      borderBottomWidth: 1,
      borderColor: colors.boxborder,
    },

  })

//make this component available to the app
export default RoundAnalysisComponent;
