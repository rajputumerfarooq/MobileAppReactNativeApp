//import liraries
import React, { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
// Third Party Libraries
import ProgressCircle from "react-native-progress-circle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
// Styles
import styles from "./styles";
import colors from "../../../../Constants/Colors";
//Components
import StrikerComponent from "../Components/StrikerComponent";
import TeamsComponent from "../Components/TeamsComponent";
//redux
import { useSelector } from "react-redux";
//API
import { getConnectedUsers } from "../API/invokeApi";
// Charts Imports

//Images
import image_1 from "../../../../assets/ProfilePic/1.png";
import image_2 from "../../../../assets/ProfilePic/2.jpg";
import image_3 from "../../../../assets/ProfilePic/3.jpg";
import image_4 from "../../../../assets/ProfilePic/4.jpg";
import image_5 from "../../../../assets/ProfilePic/5.jpg";

import image_6 from "../../../../assets/ProfilePic/6.jpg";
import image_7 from "../../../../assets/ProfilePic/7.jpg";
import image_8 from "../../../../assets/ProfilePic/8.jpg";
import image_9 from "../../../../assets/ProfilePic/9.jpg";
import image_10 from "../../../../assets/ProfilePic/10.jpg";

import image_11 from "../../../../assets/ProfilePic/11.jpg";
import image_12 from "../../../../assets/ProfilePic/12.jpg";
import image_13 from "../../../../assets/ProfilePic/13.jpg";
import image_14 from "../../../../assets/ProfilePic/14.jpg";
import image_15 from "../../../../assets/ProfilePic/15.jpg";
import RadarChartScreen from "../../../Common/Statistics/Mobile/Statistics";

const _fetchConnectedStrikers = async (loggedUser, userId) => {
  const response = await getConnectedUsers(loggedUser, userId);

  console.log(response);
};

// create a component
const CoachDashboard = () => {
  const connectedUsers = [
    {
      key: 1,
      image: image_1,
      name: "Martin Borgmeier",
    },

    {
      key: 2,
      image: image_2,
      name: "Bachem Nick",
    },
    {
      key: 3,
      image: image_3,
      name: "Glawe Wolfgang",
    },

    {
      key: 4,
      image: image_4,
      name: "Haferkamp Sven",
    },

    {
      key: 5,
      image: image_5,
      name: "Hammer Mark",
    },
    {
      key: 6,
      image: image_6,
      name: "Hermann Alexander",
    },

    {
      key: 7,
      image: image_7,
      name: "Hermann Maximilian",
    },

    {
      key: 8,
      image: image_8,
      name: "Hrimer Michael",
    },
    {
      key: 9,
      image: image_9,
      name: "Katich",
    },
    {
      key: 10,
      image: image_10,
      name: "Schiergen Laurenz",
    },

    {
      key: 11,
      image: image_11,
      name: "Schmitt Max",
    },
    {
      key: 12,
      image: image_12,
      name: "Vahlenkamp Timo",
    },

    {
      key: 13,
      image: image_13,
      name: "Wigo Weisner",
    },

    {
      key: 14,
      image: image_14,
      name: "Wolff Benet",
    },

    {
      key: 15,
      image: image_15,
      name: "De Bruyn Jannik",
    },
  ];

  const teams = [
    {
        id: 1,
        image: "https://via.placeholder.com/100x100/FFB6C1/000000",
        name: "Group 1",
        countMembers: 3,
        members: [

            {
                image: image_1,
                name: "Martin Borgmeier"
            },

            {
                image: image_2,
                name: "Bachem Nick"

            },
            {
                image: image_3,
                name: "Glawe Wolfgang"

            },


        ],
    },
    {
        id: 2,
        image: "https://via.placeholder.com/100x100/4682B4/000000",
        name: "Group 2",
        countMembers: 3,
        members: [
            {
                image: image_4,
                name: "Haferkamp Sven"
            },

            {
                image: image_5,
                name: "Hammer Mark"

            },
            {
                image: image_6,
                name: "Hermann Alexander"

            },






        ],
    },
    {
        id: 3,
        image: "https://via.placeholder.com/100x100/008080/000000",
        name: "Group 3",
        countMembers: 3,
        members: [

            {
                image: image_7,
                name: "Hermann Maximilian"
            },

            {
                image: image_8,
                name: "Hrimer Michael"

            },
            {
                image: image_9,
                name: "Katich"

            },



        ],
    },
    {
        id: 4,
        image: "https://via.placeholder.com/100x100/FF6347/000000",
        name: "Group 4",
        countMembers: 3,
        members: [

            {
                image: image_10,
                name: "Schiergen Laurenz"
            },

            {
                image: image_11,
                name: "Schmitt Max"

            },
            {
                image: image_12,
                name: "Vahlenkamp Timo"

            },


        ],
    },
    {
        id: 5,
        image: "https://via.placeholder.com/100x100/87CEEB/000000",
        name: "Group 5",
        countMembers: 3,
        members: [

            {
                image: image_13,
                name: "Wigo Weisner"
            },

            {
                image: image_3,
                name: "Glawe Wolfgang"

            },
            {
                image: image_11,
                name: "Wolff Benet"

            },



        ],
    },

    {
        id: 6,
        image: "https://via.placeholder.com/100x100/FFC0CB/000000",
        name: "Group 6",
        countMembers: 3,
        members: [
            {
                image: image_9,
                name: 'Katich'
            },
            {
                image: image_5,
                name: 'Hammer Mark'

            },
            {
                image: image_6,
                name: 'Hermann Alexander'

            },


        ],
    },
  ];



  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const _fetchAllConnectedUsers = async () => {
    const loggedUser = {
      username: user.userName,
      sessiontoken: user.sessionToken,
    };

    //const response = await getConnectedUsers(loggedUser, user.userId)
  };

  useEffect(() => {

    
    // _fetchAllConnectedUsers();
  }, [user]);

  //States
  const [Users, setUsers] = useState(connectedUsers);
  const [Type, setType] = useState(true) // State to Determine whether we have to show All Connected users or Teams.... True for ALL and false for TEAMS




  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", }}>
        
        <Text style={styles.text} >ATHLETES DASHBOARD</Text>

        <View
          // ALL AND TEAMS BUTTONS
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
            alignSelf: "center",
          }}
        >
            
          <TouchableOpacity
            onPress={() => {
                setType(true)
            }}
          >
            <View>
              <View style={styles.header}>
                <Icon name="list-outline" color="#76b729" size={20}></Icon>
                <Text>All</Text>
              </View>
            </View>
          </TouchableOpacity>



          <TouchableOpacity onPress={() =>  setType(false)}>
            <View>
              <View style={styles.header}>
                <Icon name="people-outline" color="#76b729" size={20} />
                <Text>Teams</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>







        <View
          style={styles.action}
          // SearchBar
        >
          <Icon name="search-outline" color="#76b729" size={25} />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            //value={query}
            //  onChangeText={queryText => handleSearch(queryText)}
            placeholder="Search"
            style={{
              backgroundColor: colors.background,
              paddingHorizontal: 30,
                width: '80%',
            
                
            }}
          />
        </View>



        {Type ? 
            <StrikerComponent data={Users} /> :
            <TeamsComponent data={teams}/>
        }


      </View>



    </SafeAreaView>
  );
};

//make this component available to the app
export default CoachDashboard;
