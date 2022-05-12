//import liraries
import React, { useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
// Third Party Libraries
import ProgressCircle from "react-native-progress-circle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
//Styles
import styles from "../Mobile/styles";
//Images
import demoImage from "../../../../assets/ProfilePic/2.jpg";

//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AddUserOrTeam } from "../../../../Store/UserOrTeamReducer/type";
 //Navigation
import { useNavigation, useRoute,StackActions } from "@react-navigation/native";
import NavigationStrings from "../../../../Constants/NavigationStrings";
import { SetSelectedUser } from "../../../../Store/selectedUserReducer/type";
import colors from "../../../../assets/colors";
// create a component
const StrikerComponent = (props) => {
  //Navigation
  const route = useRoute();
  const navigation = useNavigation();
  const refRBSheet = useRef();
 //redux
 const { userorteam } = useSelector((state) => {
  return {
    userorteam: state.userReducer.userorteam,
  };
});

 



        
const dispatch = useDispatch();
  return (
    <>


      <RBSheet
        animationType="fade"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          // wrapper: {
          //   backgroundColor: "transparent",
          // },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >


        <Text> COOLBOY</Text>
      </RBSheet>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.root}
        data={props.data}
        // ItemSeparatorComponent={() => {
        //   return <View style={styles.separator} />;
        // }}
        renderItem={(item) => {


          // console.log(JSON.stringify(item[0]))
      

          return (
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onLongPress = { () => refRBSheet.current.open()}
              onPress={() => 
                
                {
                  //alert(item.item.id)

                  const appointment = {
                    firstName: item.item.firstName,
                    lastName: item.item.lastName,
                    userId: item.item.id,
                     userName:item.item.username,
                  };
            
            
                  dispatch({ type: SetSelectedUser, payload: appointment});
                   navigation.navigate(NavigationStrings.STRIKER_DASHBOARD)
                }
               
            }
            >
              
              <View style={styles.boxfull}>
                <Image
                  source={{uri:item.item.picture}}
                  style={{
                    width: "35%",
                    height: 120,
                    marginTop: -1,
                    marginLeft: -1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={styles.content}>
                  <View style={styles.mainContent}>
                    <View style={styles.boxHeader}>
                      <Text style={styles.text}>{item.item.firstName} {item.item.lastName}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ paddingRight: 10, alignItems: "center" }}>
                        <Text style={{marginBottom:10}}>Status</Text>
                        <ProgressCircle
                          percent={100}
                          radius={26}
                          borderWidth={4}
                          color={colors.fourth_primary}
                          shadowColor={colors.boxborder}
                          bgColor={colors.background}
                        >
                          <Text style={styles.Message}>-</Text>
                        </ProgressCircle>
                      </View>

                      <View style={{ paddingRight: 10, alignItems: "center" }}>
                        <Text style={{marginBottom:10}}>WAGR</Text>
                        <ProgressCircle
                          percent={60}
                          radius={26}
                          borderWidth={4}
                          color={colors.second_primary}
                          shadowColor={colors.boxborder}
                          bgColor={colors.background}
                        >
                          <Text style={styles.Message}>{item.item.Wagr}</Text>
                        </ProgressCircle>
                      </View>
                      <View style={{ paddingRight: 10, alignItems: "center" }}>
                        <Text style={{marginBottom:10}}>HCP</Text>
                        <ProgressCircle
                          percent={100}
                          radius={26
                          }
                          borderWidth={4}
                          color='#00b39a'
                          shadowColor={colors.boxborder}
                          bgColor={colors.background}
                        >
                          <Text style={styles.Message}>-</Text>
                        </ProgressCircle>
                      </View>
                    </View>
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
export default StrikerComponent;
