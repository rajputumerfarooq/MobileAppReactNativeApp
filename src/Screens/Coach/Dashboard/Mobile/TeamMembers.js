//import liraries
import React, { useRef } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
//Styles
import styles from "./styles";
// Third Party Libraries
import ProgressCircle from "react-native-progress-circle";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import RBSheet from "react-native-raw-bottom-sheet";
import { useEffect } from "react";
//API
import { getConnectedTeamMembers } from "../API/invokeApi";





// create a component
const TeamMembers= ({route,navigation}) => {

  const refRBSheet = useRef();
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  //States
  const [teamMembers, setTeamMembers] = useState([]); // State to save the fetched ConnectedUsers from Api


  // API Call to fetch Connected Users
  const _fetchTeamMembers = async () => {
    const loggedUser = {
      username: user.userName,
      sessiontoken: user.sessionToken,
    };

    const response = await getConnectedUsers(loggedUser, user.userId);
    setConnectedUsers(response.data)

  };
  

  useEffect( ()=> {

  },[]);

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
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(item) => {
          const Group = item.item;
          let mainContentStyle;
          if (Group.attachment) {
            mainContentStyle = styles.mainContent;
          }
          return (
            <TouchableOpacity
              style={{ paddingTop: 10 }}
              onLongPress = { () => refRBSheet.current.open()}
              onPress={() => navigation.navigate("PlayerDashboardScreen")}
            >
              <View style={styles.box}>
                <Image
                  source={Group.image}
                  style={{
                    width: "45%",
                    height: 158,
                    marginTop: -1,
                    marginLeft: -1,
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 30,
                  }}
                />
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.boxHeader}>
                      <Text style={styles.text}>{Group.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ paddingRight: 5, alignItems: "center" }}>
                        <Text style={styles.item}>ROUNDS</Text>
                        <ProgressCircle
                          percent={50}
                          radius={23}
                          borderWidth={4}
                          color={colors.primary}
                          shadowColor={colors.boxborder}
                          bgColor={colors.background}
                        >
                          <Text style={styles.Message}>{"50%"}</Text>
                        </ProgressCircle>
                      </View>

                      <View style={{ paddingRight: 5, alignItems: "center" }}>
                        <Text style={styles.item}>WAGR</Text>
                        <ProgressCircle
                          percent={80}
                          radius={23}
                          borderWidth={4}
                          color={colors.second_primary}
                          shadowColor={colors.boxborder}
                          bgColor={colors.background}
                        >
                          <Text style={styles.Message}>{"80%"}</Text>
                        </ProgressCircle>
                      </View>
                      <View
                        style={{
                          paddingRight: 5,
                          alignItems: "center",
                          width: 70,
                        }}
                      >
                        <Text style={styles.item}>GRAD</Text>
                        <TouchableOpacity
                          style={styles.signIn}
                          // onPress={() => { loginHandle(data.username, data.password) }}
                        >
                          <LinearGradient
                            colors={["#76b729", "#76b729"]}
                            style={styles.signIn}
                          >
                            <Text
                              style={[
                                styles.textSign,
                                {
                                  color: "#fff",
                                },
                              ]}
                            >
                              2021
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
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
export default TeamMembers;
