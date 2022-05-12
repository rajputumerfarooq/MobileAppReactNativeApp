
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Button, Linking,Alert} from 'react-native';
import RNLocation from 'react-native-location';
import Sound from 'react-native-sound'
import countdown from '../../../assets/sounds/countdown.wav';
import { useSelector } from "react-redux";
import { _addUserLocations } from '../../../api/InvokeApi';
 
 import BackgroundTimer from "react-native-background-timer"

RNLocation.configure({

  desiredAccuracy: {
    ios: "bestForNavigation",
    android: "highAccuracy"
  },
  // Android only
  androidProvider: "auto",
  interval: 50000, // Milliseconds

  // iOS Only
  activityType: "other",
  allowsBackgroundLocationUpdates: false,
  headingFilter: 1, // Degrees
  headingOrientation: "portrait",
  pausesLocationUpdatesAutomatically: false,
  showsBackgroundLocationIndicator: false,
})

const LocationTracking = () => {
 //redux
 const { user } = useSelector((state) => {
  return {
    user: state.userReducer.user,
  };
});
const requestBody = {
  loggedUser: {
    username: user.userName,
    userId:user.userId,
    sessiontoken: user.sessionToken,
  },
};
  const [viewLocation, isViewLocation] = useState([])


  const [secondsLeft, setSecondsLeft] = useState(3601);
  const [timerOn, setTimerOn] = useState(true);
  // Runs when timerOn value changes to start or stop timer
  useEffect(() => {
    // if (timerOn) startTimer();
    // else BackgroundTimer.stopBackgroundTimer();
    // return () => {
    //   BackgroundTimer.stopBackgroundTimer();
    // };
  }, [timerOn]);
// Checks if secondsLeft = 0 and stop timer if so
useEffect(() => {
  if (secondsLeft === 0) 
  setSecondsLeft(3601);
  //BackgroundTimer.stopBackgroundTimer()
}, [secondsLeft]);

const clockify = () => {
  let hours = Math.floor(secondsLeft / 60 / 60)
  let mins = Math.floor((secondsLeft / 60) % 60)
  let seconds = Math.floor(secondsLeft % 60)
  let displayHours = hours < 10 ? `0${hours}` : hours
  let displayMins = mins < 10 ? `0${mins}` : mins
  let displaySecs = seconds < 10 ? `0${seconds}` : seconds
  return {
    displayHours,
    displayMins,
    displaySecs,
  }
}
  const startTimer = () => {
    // BackgroundTimer.runBackgroundTimer(() => {
    //   setSecondsLeft(secs => {
    //     if (secs > 0) 
    //     return secs - 1
    //     else return 0
    //   })
    // }, 1000)
    
    BackgroundTimer.runBackgroundTimer(() => { 
      //code that will be called every 3 seconds 
     getLocation()
   
     setSecondsLeft(secs => {
      console.log( secs)
          if (secs > 0) 
          return secs - 1
          else return 0
        })

        
      }, 
      60000);
  }
  const getLocation = async () => {
    
    let permission = await RNLocation.checkPermission({
      ios: 'always', // or 'always'
      android: {
        detail: 'fine' // or 'fine'
      }
    });


    let location;
   
 
      permission = await RNLocation.requestPermission({
        ios: "always",
        android: {
          detail: "fine",
          rationale: {
            title: "We need to access your location",
            message: "We use your location to show where you are on the map",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      })
     

       location = await RNLocation.getLatestLocation({timeout: 100})
       
       isViewLocation(location)
      
       const LocationObject = {
        latitude: location.latitude, 
        longitude: location.longitude, 
        
    };
  //  console.log(LocationObject)
    var res = _addUserLocations(requestBody.loggedUser, LocationObject);
    // if ((res.status = 200)) {
    //   Alert.alert("Location Updated Successfully.");
    // }  
    
     
  }
  
  return (
    <View style={styles.container}>
    {/* <Text style={styles.time}>
      {clockify().displayHours} Hours {clockify().displayMins} Mins{" "}
      {clockify().displaySecs} Secs
    </Text>
    <Button
      title="Start/Stop"
      onPress={() => setTimerOn(timerOn => !timerOn)}
    /> */}
  </View>
  )
}

//   return (
//     <View style={styles.container}>
//       <Text>React Native Geolocation</Text>
     
     
//       <View
//         style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
//         <Button title="Get Location" 
//         onPress={()=> {getLocation();}} 
//         />       
//       </View>

//       <Text>Latitude: {viewLocation.latitude} </Text>
//       <Text>Longitude: {viewLocation.longitude} </Text> 

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    //   flex: 1,
    //  backgroundColor: "#000",
  },
  time: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
})
export default LocationTracking;