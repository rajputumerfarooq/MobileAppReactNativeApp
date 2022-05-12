//import liraries
import React, { useRef,useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Alert,
} from "react-native";
// Styles
import styles from "../Mobile/styles";
import colors from "../../../../Constants/Colors";
// Third Party Libraries
import ProgressCircle from "react-native-progress-circle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import _ from "lodash";
//Components
import ButtonComponent from "./ButtonComponent";
import StrikerComponent from "./StrikerComponent";
// Navigation
import { useNavigation } from "@react-navigation/native";
import NavigationStrings from "../../../../Constants/NavigationStrings";
//redux
import { useSelector } from "react-redux";
 
import { useDispatch } from "react-redux";
//API
import {  getConnectedTeamMembers} from "../API/invokeApi";



// create a component
const TeamsComponent = (props) => {
  //Constants  
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const invokeTeamsBottomSheet = useRef();
  //useState
  const[teamMembers, setTeamMembers] = useState([]);

  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });
  const { UserOrTeam } = useSelector((state) => {
    return {
      UserOrTeam: state.UserOrTeamReducer.UserOrTeam,
    };
  });
  const test = () => {
    alert("check");
  };


    // API Call to fetch Connected Users
    const _fetchTeamMembers = async (groupId) => {
    const loggedUser = {
        username: user.userName,
        sessiontoken: user.sessionToken,
    };
    const SelectedUser = {
      name: UserOrTeam.name,
      userId: UserOrTeam.userId,
  };
  console.log("===========================================\n")
console.log(SelectedUser)
    const response = await getConnectedTeamMembers(loggedUser, groupId);
    setTeamMembers(response.data)
  

    };

  return (
    <>

     {/* LONG PRESS */}
      <RBSheet
        animationType="fade"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={150}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <ButtonComponent />
      </RBSheet>

      


        {/* TeamMembers */}
      <RBSheet
        animationType="fade"
        ref={invokeTeamsBottomSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={500}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
     
         <StrikerComponent data={teamMembers}/>
     

      </RBSheet>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        data={props.data}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if (Group.attachment) {
            mainContentStyle = styles.mainContent;
          }


          return (
            <TouchableOpacity
              onLongPress={() => refRBSheet.current.open()}
              onPress={() => {
                _fetchTeamMembers(Group.id)
                invokeTeamsBottomSheet.current.open()
              }}
            >
              {/* ---------------------------------------------  FOR GROUPS --------------------------------------------- */}
              <View style={styles.container}>
                <Image source={{ uri: "https://via.placeholder.com/100x100/FFB6C1/000000" }} style={styles.avatar} />
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.text}>
                      <Text style={styles.groupName}>{Group.name}</Text>
                    </View>
                    <Text style={styles.countMembers}>
                      {Group.members} members
                    </Text>
                    <Text style={styles.timeAgo}>Updated 2 months ago</Text>
                    {/* {_.times(Group.members, (i) => (
                      <Image
                        key={i}
                        style={styles.memberImage}
                       source={{ uri: "https://via.placeholder.com/100x100/FFB6C1/000000" }}
                      />
                    ))} */}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

//make this component available to the app
export default TeamsComponent;
