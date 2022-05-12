import React, { useState, Component, useEffect, useRef } from 'react';
import {
     Text, View, SafeAreaView, TouchableOpacity, Dimensions,
   
    FlatList,
    Image,

} from 'react-native';
import {Timer, Countdown} from 'react-native-element-timer';

import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';
import Ionicons from "react-native-vector-icons/Ionicons"; 
import styles from './style';
 //redux
 

export default function CountdownTimer() {
   
  const countdownRef = useRef(null);

    
    useEffect(() => {
     //   countdownRef.current.start();

  },[]);


    return (
       

   
   
   
   <View style={{flex:1}}>
           
            <View style={{ marginTop: 15,flexDirection:'row'  }}>
            <View style={{width:'20%'}}>
                
                <TouchableOpacity
               onPress={() => navigation.goBack()}
               style={{  marginLeft: 20 }}
             >
               <Ionicons name="arrow-back-sharp" size={30} />
             </TouchableOpacity></View> 
            
               <Text style={{fontSize:20,fontWeight:'bold'}}></Text>
               
              </View>
              

             


                 

                 

                   
      
      <View style={{  padding:4,flex:.06}}>
      <TouchableOpacity //disabled={true}
            style={{
              borderRadius: 10,
              backgroundColor: "#76b729",
              borderColor: "#76b729",
              borderWidth: 2,
               
            
            }}
           
            
            onPress={ 
              ()=>{
              //  setRestState(true);
             //   timerRef.current.stop();
                countdownRef.current.start();
          }}
           
          >
            <Text style={{ padding:4, color: "#fff", fontSize:16,fontWeight:'bold' , alignSelf:'center'}}>
             
            Rest Time
            </Text>
          </TouchableOpacity>
       
        </View >
      
      
      <View style={{flex:.32,alignItems:'center'}}>
     
                  
      <ProgressCircle
          percent={100}
          radius={90}
          borderWidth={10}
          color={colors.primary}
          shadowColor={colors.boxborder}
          bgColor={colors.background}
        >
          <View style={styles.item}>
         
          <Countdown
                    ref={countdownRef}
                    style={styles.timer}
                    textStyle={{fontSize:40}}
                    initialSeconds={5}
                    onTimes={e => {

  
                    }}
                    onPause={e => {}}
                    onEnd={(e) => {
                 
                    }}
                />
         
          </View>

         
        </ProgressCircle>
               

      </View>
    
        </View>

 

    );
}
 