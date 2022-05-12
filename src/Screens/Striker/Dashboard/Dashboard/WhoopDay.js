
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

import colors from '../../../../Constants/Colors';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// eslint-disable-next-line no-extend-native
Number.prototype.before = function () {
  var value = parseInt(this.toString().split(".")[0], 10); //before
  return value ? value : 0;
};
// eslint-disable-next-line no-extend-native
Number.prototype.after = function () {
  var value = parseInt(this.toString().split(".")[1], 10); //after
  return value ? value : 0;
};

export default function WhoopDay() {


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
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
    userId: '',
    mail: '',
    sessionToken: '',
    prename: '',
    surname: '',
    role: '',
    profilePicture: '',
  });
  const [whoopValues, setWhoopValues] = React.useState({
    WhoopData: {
      Strain: "",
      Recovery: "",
      Sleep: ""
    },
    WhoopSleepData: {
      Sleeping: "",
      HoursOfSleep: "",
      NeeSleep: "",
    },
    OAuth: {
      access_token: "",
      expires_in: "",
      refresh_token: "",
      user: {
        id: 0,
      }
    }
  })

  const [isLoading, setLoading] = useState(true);


  const _fetchUser = async () => {
    try {

      const request = {
        username: "benetwolff1@aol.com",
        password: "infGvwGvw123",
        grant_type: "password",
        issueRefresh: true,
      };
      const response = await axios.post("https://api-7.whoop.com/oauth/token", request);
      setWhoopValues({
        ...whoopValues,
        OAuth: {
          access_token: response.data.access_token,
          expires_in: response.data.expires_in,
          refresh_token: response.data.refresh_token,
          user: {
            id: response.data.user.id,
          }


        }
      })

      let a = response.data.access_token;

      const config = {
        headers: { Authorization: "Bearer " + a }
      };

      if (a !== "")
        axios
          .get(
            "https://api-7.whoop.com/users/" + whoopValues.OAuth.user.id + "/cycles",
            config
          )
          .then((response) => {
            if (response) {
              //  console.log("API res", response.data);

              let recoveryScore = "0";
              let strainScore = "0";
              let sleepScore = "0";
              let lightSleep = 0;
              let remSleep = 0;
              let slowWaveSleepDuration = 0;

              if (response.data[0].recovery !== null)
                recoveryScore = response.data[0].recovery.score;

              if (response.data[0].strain !== null)
                strainScore = response.data[0].strain.score;

              if (response.data[0].sleep !== null)
                sleepScore = response.data[0].sleep.score;

              if (typeof response.data[0].sleep.sleeps[0] !== "undefined") {
                lightSleep =
                  response.data[0].sleep.sleeps[0].lightSleepDuration / 3600 / 1000;
                remSleep =
                  response.data[0].sleep.sleeps[0].remSleepDuration / 3600 / 1000;
                slowWaveSleepDuration =
                  response.data[0].sleep.sleeps[0].slowWaveSleepDuration /
                  3600 /
                  1000;
              }

              const lightSleepHours = lightSleep.before();
              const lightSleepMinutes =
                parseInt(lightSleep.after().toString().slice(0, 2)) / 60;

              const remSleepHours = remSleep.before();
              const remSleepMinutes =
                parseInt(remSleep.after().toString().slice(0, 2)) / 60;

              const slowWaveSleepDurationHours = slowWaveSleepDuration.before();
              const slowWaveSleepDurationMinutes =
                parseInt(slowWaveSleepDuration.after().toString().slice(0, 2)) / 60;

              const sumMinutes =
                lightSleepMinutes + remSleepMinutes + slowWaveSleepDurationMinutes;
              const sumHours =
                lightSleepHours + remSleepHours + slowWaveSleepDurationHours;



              setWhoopValues({
                ...whoopValues,
                WhoopData: {
                  Strain: strainScore === null ? "0" : parseInt(strainScore),
                  Recovery: recoveryScore === null ? "0" : parseInt(recoveryScore),
                  Sleep: sleepScore === null ? "0" : parseInt(sleepScore)
                },
                WhoopSleepData: {
                  Sleeping: sleepScore === null ? 0 : parseInt(sleepScore), //6:02
                  HoursOfSleep: parseFloat((sumMinutes + sumHours).toString()
                  ).toFixed(2),
                  NeedSleep: "10:31"


                }
              })
            }
          })
          .catch(error => {
            // console.log("ERaaaR", error)
          });

      if (whoopValues.WhoopSleepData.HoursOfSleep != '') {
        //   console.log("check", whoopValues)
        setLoading(false);

      }
    } catch (error) {
      alert(error);

    }
  };

  useEffect(() => {
    if (isLoading) { _fetchUser(); }
  });
  return (

    <View  >
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        paddingTop: 5,
      }}>
        <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
          <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
          <Text style={styles.item}> STRAIN </Text>
          </View>

          <View style={{padding:4}}>
          <ProgressCircle
            percent={whoopValues.WhoopData.Strain}
            radius={16}
            borderWidth={3}
            color={colors.primary}
            shadowColor={colors.boxborder}
            bgColor={colors.background}
          >
            <Text style={styles.item}>{whoopValues.WhoopData.Strain  }</Text>
          </ProgressCircle>
          </View>
           

        </View>

        <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
          <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
          <Text style={[styles.item,{padding:0,paddingTop:2}]}> RECOVERY </Text>
          </View>

          <View style={{padding:4}}>
          <ProgressCircle
            percent={whoopValues.WhoopData.Recovery}
            radius={16}
            borderWidth={3}
            color={colors.second_primary}
            shadowColor={colors.boxborder}
            bgColor={colors.background}
          >
            <Text style={styles.item}>{whoopValues.WhoopData.Recovery  }</Text>
          </ProgressCircle>

          </View>
           
        </View>
        <View style={{ width:'32%',alignItems: 'center',borderWidth:1,borderRadius:10,height:60,borderColor:'rgba(128, 150, 95, 0.25)' }}>
          <View style={{width:'100%',borderTopRightRadius:10,borderTopLeftRadius:10,height:15,backgroundColor:'rgba(128, 150, 95, 0.25)'}}>
          <Text style={styles.item}> SLEEP </Text>
          </View>
         <View style={{padding:4}}>
           <ProgressCircle
            percent={whoopValues.WhoopData.Sleep}
            radius={16}
            borderWidth={3}
            color={colors.third_primary}
            shadowColor={colors.boxborder}
            bgColor={colors.background}
          >
            <Text style={styles.item}>{whoopValues.WhoopData.Sleep }</Text>
          </ProgressCircle></View>
          


          {/* <Text style={styles.item}>{whoopValues.WhoopSleepData.NeedSleep}</Text>
          <Text style={styles.item}>Need sleep</Text>
 */}


        </View>
      </View>


      <View style={{
        paddingTop: 2,
        flexDirection: 'row', justifyContent: 'space-evenly',
      }}>
        
        <View  >
           

         
          <Text style={styles.item}>{whoopValues.WhoopSleepData.HoursOfSleep}</Text>
          <Text style={styles.item}>Hours of
           sleep
          </Text>

        </View>

        <View  >
         
          <Text style={styles.item}>Sleeping</Text>
          <Text style={styles.item}>{whoopValues.WhoopSleepData.Sleeping}%</Text>

        </View>
        <View  >
          


          <Text style={styles.item}>{whoopValues.WhoopSleepData.NeedSleep}</Text>
          <Text style={styles.item}>Need sleep</Text>



        </View>
        
        </View> 
      <View style={{
        paddingTop: 8,
        flexDirection: 'row', justifyContent: 'space-evenly',
      }}>

        <Feather
          name="smartphone"
          color='black'
          size={20}
          cir
        />
        <Text style={styles.item}>-------</Text>
        <FontAwesome
          name="check-circle"
          color={colors.primary}
          size={20}
          cir
        />
        <Text style={styles.item}>-------</Text>
        <FontAwesome
          name="cloud"
          color='black'
          size={20}
          cir
        />
      </View>

    </View>



  )
}



