import React,{useEffect,useState} from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView ,TouchableOpacity} from 'react-native'

import colors from '../../../../Constants/Colors';
// API
import axios from "axios";
  
 //redux
 
import { useSelector } from 'react-redux'; 
import { apiGetAppointmentsforDashboard } from '../../../../api/InvokeApi';
import { API_ALL_APPOINTMENT_FOR_DASHBOARD_URL } from '../../../../api/urls';

export default function TodaysTask() {
  const [myEvents, setMyEvents] = useState([]);  
 
  //redux

 const { user } = useSelector(state => {
  return {
    user: state.userReducer.user,
     
  }
});
//redux

const { selecteduser } = useSelector((state) => {
return {
  selecteduser: state.SelectedUserReducer.selecteduser,
};
});


const loggedUser={ 
  'username':user.userName,
  'userId':user.userId,
  'sessiontoken':user.sessionToken}

  someMethod = (date) => {
  
  this.weekViewRef.goToDate(date);
 
};


function getParsedTimeOnly(date){
  date = String(date).split('T');
  dateS = String(date[1]).split(':');
 
  return dateS[0]+':'+dateS[1];
}
const _fetchData = async () => {
  try {
     
     
    const response = await axios.post(API_ALL_APPOINTMENT_FOR_DASHBOARD_URL, {
      loggeduser: loggedUser,
      type: 0,
      userId:selecteduser==undefined? loggedUser.userId: selecteduser.userId
    });
   //   const response = await apiGetAppointmentsforDashboard(loggedUser, {type: 0, userId: selecteduser==undefined? loggedUser.userId: selecteduser.userId} );

      if (JSON.stringify(response.status) == "200") {
 
  
          let apps = response.data;
         
           
          let arr = [];
          if (apps.length > 0) {
              for (var element = 0; element < apps.length; element++) {

                
                   
                  
                  var statedate = getParsedTimeOnly(apps[element].startdate);
                  var enddate = getParsedTimeOnly(apps[element].enddate);
                  //console.log(statedate,enddate);
                       let obj = {
                      id: apps[element].id,
                      title: apps[element].title  ,
                        startDate: statedate,
                       endDate:enddate,
                           }


                  arr = [...arr, obj];
                  
                  
              }

          }
       // console.log('testtttttttttttt',arr);
          setMyEvents(arr);

    
      }
         


  } catch (error) {
      alert(error);

  }
};
  useEffect(() => {
    _fetchData();


},[]);
    const styles = StyleSheet.create({

        scrollContainer: {


            width: '100%',
            borderRadius: 30,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',

        },
        item: {
            fontSize: 10,
            color: colors.text,
            paddingBottom: 5,
            alignSelf: 'flex-start',
            alignItems: 'center',
            justifyContent: 'center',

        },
        Message: {
            fontSize: 10,
            color: colors.text,

            paddingTop: 5,
        },
        line: {
          //  borderBottomWidth: 1,
            borderColor: colors.text,
            paddingTop: 5,

        },

    })

    return (

        <View style={styles.scrollContainer}>

       
                
      {myEvents==''?              <View style={styles.line}>
                        <Text style={styles.item}> You do not have any appointment for now!</Text>

                    </View>  :
                    <FlatList
        //scrollEnabled={false}
       
        data={myEvents}
        
        renderItem={(item) => {


          
      

          return (
           
              <View style={{marginTop:5}}>
               
            <View style={styles.line}>
            <Text style={styles.item}>
              
              {item.item.startDate} {item.item.endDate}  {item.item.title}</Text>
            </View>
            <View style={{
            height: 1,
            backgroundColor: "#CCCCCC",
    
        }} />
            </View>
                    

                     
                   

              
           
          );
        }}
      />}
        </View>

    )
}


