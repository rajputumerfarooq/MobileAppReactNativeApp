import React, { useState, Component, useEffect, useRef } from 'react';
import {
  Text, View, SafeAreaView, TouchableOpacity, Dimensions,

  FlatList,
  Image,

} from 'react-native';
import { Timer, Countdown } from 'react-native-element-timer';
import NavigationStrings from '../../../../../Constants/NavigationStrings';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import ProgressCircle from 'react-native-progress-circle';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import styles from './style';
//redux

import { useSelector } from 'react-redux';
import CountdownTimer from './CountdownTimer';
//Sound
import Sound from 'react-native-sound';
import countdown from '../../../../../assets/sounds/countdown.wav';




Sound.setCategory('Playback');
var ding = new Sound(countdown, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
  console.log(
    'duration in seconds: ' +
    ding.getDuration() +
      'number of channels: ' +
      ding.getNumberOfChannels(),
  ) ;
});

const playPause = () => {

  ding.play(success => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });

};



export default function WorkOut() {

  const timerRef = useRef(null);
  const countdownRef = useRef(null);


  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [ExcerciseDetails, setExcerciseDetails] = useState([]);
  const [setNumber, setSetNumber] = useState(1);
  const [remainSets, setRemainSets] = useState(0);
  const [reps, setReps] = useState();
  const [timeState, setTimeState] = useState("start");
  const [startingWeight, setStartingWeight] = useState();
  const [restState, setRestState] = useState(false);

  const [Excercise, setExcercise] = useState([]);
  const [ExcerciseCount, setExcerciseCount] = useState();
  const [Count, setCount] = useState(0);
  const [timerAutoStart, setTimerAutoStart] = useState(false);

  
  //redux
  const { user } = useSelector(state => {
    return {
      user: state.userReducer.user,

    }
  });
  const loggedUser = {
    'username': user.userName,
    'sessiontoken': user.sessionToken
  }



  useEffect(() => {

    setExcerciseDetails(route.params.obj);


    setExcercise(route.params.obj.excercises[0])
    setExcerciseCount(route.params.obj.excercises.length)
    setStartingWeight(route.params.obj.excercises[0].startingWeightKg)
    setReps(route.params.obj.excercises[0].reps)


  }, [isFocused]);


  return (

    <View style={styles.container}>
      {restState == false ?

        <View style={{ flex: 1 }}>
          {/*            
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
               */}










          <View style={{ padding: 4, flex: .06 }}>
            <TouchableOpacity disabled={true}
              style={{
                borderRadius: 10,
                backgroundColor: "#76b729",
                borderColor: "#76b729",
                borderWidth: 2,


              }}




            >
              <Text style={{ padding: 4, color: "#fff", fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>

                {Excercise.name}
              </Text>
            </TouchableOpacity>

          </View >

          <View style={{ padding: 4, flex: .04 }}>
            <TouchableOpacity disabled={true}
              style={{
                borderRadius: 10,
                // backgroundColor: "#76b729",
                //borderColor: "#76b729",
                //borderWidth: 2,


              }}




            >
              <Text style={{ margin: 2, color: "#000", fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>

                Set No {setNumber}
              </Text>
            </TouchableOpacity>

          </View >
          <View style={{ flex: .30 }}>
            <Image style={{ height: 190, width: '100%', resizeMode: 'contain' }} source={{ uri: Excercise.gif }} />
          </View>


          <View style={{ flexDirection: "row", flex: .09 }}>


            <View style={{ width: "50%" }}>

              <View style={{ flexDirection: "row", padding: 8 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 10 }}>Starting Weight(kg):</Text>
              </View>

            </View>
            <View style={{ width: "50%" }}>

              <View style={{ flexDirection: "row", margin: 3 }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#76b729",
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    let array = startingWeight;
                    array =
                      array - 1;
                    setStartingWeight(array);
                  }}
                >
                  <Text style={{ padding: 10, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 1,
                    marginLeft: 5,
                    width: 45,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                    alignContent: 'center'
                  }}
                >
                  <Text style={{ padding: 2, color: "#000", fontWeight: "400", alignSelf: 'center', textAlign: 'center', paddingTop: 10 }}>

                    {startingWeight}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#76b729",
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    let array = startingWeight;
                    array =
                      array + 1;
                    setStartingWeight(array);


                  }}
                >
                  <Text style={{ padding: 10, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>


            </View>

          </View>
          <View style={{ flexDirection: "row", flex: .12 }}>


            <View style={{ width: "50%" }}>

              <View style={{ flexDirection: "row", padding: 8 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 10 }}>Reps:</Text>
              </View>

            </View>
            <View style={{ width: "50%" }}>

              <View style={{ flexDirection: "row", margin: 3 }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#76b729",
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    let array = reps;
                    array =
                      array - 1;
                    setReps(array);
                  }}
                >
                  <Text style={{ padding: 10, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 1,
                    marginLeft: 5,
                    width: 45,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                    alignContent: 'center'
                  }}
                >
                  <Text style={{ padding: 2, color: "#000", fontWeight: "400", alignSelf: 'center', textAlign: 'center', paddingTop: 10 }}>

                    {reps}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#76b729",
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    let array = reps;
                    array =
                      array + 1;
                    setReps(array);


                  }}
                >
                  <Text style={{ padding: 10, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>


            </View>

          </View>
          <View style={{ flex: .32, alignItems: 'center' }}>

            <ProgressCircle
              percent={100}
              radius={90}
              borderWidth={10}
              color={colors.primary}
              shadowColor={colors.boxborder}
              bgColor={colors.background}
            >
              <View style={styles.item}>
                <Timer
                  ref={timerRef}
                  autoStart={timerAutoStart}
                  style={styles.timer}
                  textStyle={{ fontSize: 40, fontWeight: 'bold' }}
                  onTimes={e => { }}
                  onPause={e => { }}
                  onEnd={e => { }}
                />
              </View>
            </ProgressCircle>

          </View>
          {timeState == 'start' ?
            <View style={{ flex: 0.10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >

                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#76b729",
                    borderColor: "#76b729",
                    borderWidth: 2,
                    width: 120,
                    alignItems: 'center'
                  }}
                  onPress={
                    () => {

                      timerRef.current.start();
                      setTimeState("resume");
                    }


                  }
                >
                  <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>

                    Start
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            :
            <View style={{ flex: 0.10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#76b729",
                    borderColor: "#76b729",
                    borderWidth: 2,
                    width: 120,
                    alignItems: 'center'
                  }}
                  onPress={
                    () => {

                      if (timeState == 'pause') {
                        timerRef.current.resume();
                        setTimeState("resume");
                      } else {
                        timerRef.current.pause();
                        setTimeState("pause");
                      }

                    }


                  }
                >
                  <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>
                    {timeState == 'resume' ? 'Pause' : 'Resume'}

                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    backgroundColor: "#76b729",
                    borderColor: "#76b729",
                    borderWidth: 2,
                    width: 120,
                    alignItems: 'center'
                  }}
                  onPress={
                    () => {
                      setRestState(true);

                    }


                  }
                >
                  <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>

                    Complete Set
                  </Text>
                </TouchableOpacity>
              </View>
            </View>


          }
        </View>
        :



        <View style={{ flex: 1 }}>













          <View style={{ padding: 4, flex: .30 }}>
            <TouchableOpacity //disabled={true}
              style={{
                borderRadius: 10,
                backgroundColor: "#76b729",
                borderColor: "#76b729",
                borderWidth: 2,


              }}




            >
              <Text style={{ padding: 4, color: "#fff", fontSize: 16, fontWeight: 'bold', alignSelf: 'center' }}>

                Rest Time
              </Text>
            </TouchableOpacity>

          </View >


          <View style={{ flex: .02, alignItems: 'center' }}>


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
                  textStyle={{ fontSize: 40 }}
                  initialSeconds={

                    Excercise.maxRestMinutes
                  }
                  onTimes={e => {

                    if(e == 9 )
                    playPause();                                 
                    if(e == 6 )
                    playPause();   

                    if(e == 3 )
                    playPause();   
                  }
                              
 

                }
                  autoStart={true}
                  onPause={e => { }}
                  onEnd={(e) => {
                    setRestState(false);
                    setTimerAutoStart(true)
                    //   alert(setNumber)
                    if (Count < ExcerciseCount) {


                      if (setNumber == Excercise.sets) {

                        var counter = Count + 1;
                        setCount(counter);


                        if (counter < ExcerciseCount) {
                          setExcercise(route.params.obj.excercises[counter])

                          setStartingWeight(route.params.obj.excercises[counter].startingWeightKg)
                          setReps(route.params.obj.excercises[counter].reps)

                          setSetNumber(1)
                        }
                        else {

                          alert('completed')
                          navigation.navigate(NavigationStrings.SCHEDULAR_STACK, {
                            screen: NavigationStrings.SCHEDULAR,
                            initial: false,
                          });

                        }



                      }
                      else {


                        setSetNumber(setNumber + 1)
                      }


                    } else {
                      alert('completed')
                    }





                  }}
                />

              </View>


            </ProgressCircle>


          </View>

        </View>

      }
    </View>


  );
}
