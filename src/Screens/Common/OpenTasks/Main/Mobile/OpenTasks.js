//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
//animation
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
// Axios
import axios from "axios";
//Styles
import styles from "./styles";
import colors from "../../../../../assets/colors";
//Redux
import { useSelector } from "react-redux";
//Navigation
import { useNavigation,useIsFocused } from "@react-navigation/native";
import NavigationStrings from "../../../../../Constants/NavigationStrings";
// API
import { _fetchAllOpenTasks } from "../../../../../api/InvokeApi";



// create a component
const OpenTasks = () => {
  //States
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(false);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);
  const [openTasks, setOpenTasks] = useState([]);
  const [filteredOpenTasks, setFilteredOpenTasks] = useState(openTasks);

  // Constants

  const navigation = useNavigation();
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const requestBody = {
    loggedUser: {
      username: user.userName,
      sessiontoken: user.sessionToken,
    },
    username: user.userName,
  };

  const focus = useIsFocused();





  const _fetchFromApi = async ()=> { 

    const result = await _fetchAllOpenTasks(requestBody)
    setOpenTasks(result.data);
    setFilteredOpenTasks(result.data)


  }


  // --------------------------------ComponentDidMount--------------------------------
  useEffect(() => {

    _fetchFromApi()

    
    setGico(false)
    setAico(false)
   
  }, [focus]);

  // --------------------------------FUNCTIONS--------------------------------

  // Fetch OpenTasks
  const _fetchOpenTasks = async () => {
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
      username: user.userName,
    };

  
    const result = await axios.post(
      "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/scheduler/getallopentask",
      { loggeduser: requestBody.loggedUser, username: requestBody.username }
    );

    setOpenTasks(result.data);

  };

  const renderOpenTasks = ({ item }) => (




    <TouchableOpacity

            onPress = { ()=>{
          navigation.navigate(NavigationStrings.OPEN_TASKS_DETAIL, {obj:item}) }}
    
    style={{ width:'100%', padding:20,  backgroundColor:  item.type == 'G' ? colors.primary : colors.fourth_primary, borderRadius: 10, marginBottom: 10,}}>
      <Text
        style={{fontSize:17}}
      >
        {item.title}
      </Text>
      </TouchableOpacity>
    // <View
    //   style={{
    //     flexDirection: "row",
    //     borderWidth: 1,
    //     borderColor: "black",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     padding: 10,
    //     marginBottom: 10,
    //     borderRadius: 10,
    //     backgroundColor:  item.type == 'G' ? colors.primary : colors.fourth_primary
    //   }}
    // >
    //   <View
    //     style={{
    //       alignItems: "flex-start",
    //       justifyContent: "center",
    //       width: "80%",
    //       padding: 10,
    //     }}
    //   >

    //     <TouchableOpacity
    //     onPress = { ()=>{
    //       navigation.navigate(NavigationStrings.OPEN_TASKS_DETAIL, {obj:item})
         
    //     }}>

    //       <Text style={{ fontSize: 20 }}>{item.title}</Text>
          
    //     </TouchableOpacity>
    //   </View>
    // </View>


  );

  const filterGico = () => {
    if (gico == false) {
      //Setting the other buttons to False
      setPico(false);
      setNico(false);
      setMico(false);
      setAico(false);

      setGico(!gico);
      setFilteredOpenTasks(
        openTasks.filter((item) => {
          return item.type == "G";
        })
      );
    } else {
      setFilteredOpenTasks([...openTasks]);
      setGico(!gico);
    }
  };

  const filterAico = () => {
    if (aico == false) {
      setPico(false);
      setNico(false);
      setMico(false);
      setGico(false);

      setAico(!aico);

      setFilteredOpenTasks(
        openTasks.filter((item) => {
          return item.type == "A";
        })
      );
    } else {
      setFilteredOpenTasks([...openTasks]);
      setAico(!aico);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxContainerRow}>
        <TouchableOpacity onPress={() => filterGico()}>
          <View style={styles.title_box1}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>G</Text>
            </View>
            <View style={{ height: "30%" }}>
              {gico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filterAico()}>
          <View style={styles.title_box2}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>A</Text>
            </View>
            <View style={{ height: "30%" }}>
              {aico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchN()}
        >
          <View style={styles.title_box3}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>N</Text>
            </View>
            <View style={{ height: "30%" }}>
              {nico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity //onPress={() => _fetchM()}
        >
          <View style={styles.title_box4}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>M</Text>
            </View>
            <View style={{ height: "30%" }}>
              {mico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity //onPress={() => _fetchP()}
        >
          <View style={styles.box_oprntask}>
            <View style={{ height: "70%", justifyContent: "flex-end" }}>
              <Text style={styles.title_text}>P</Text>
            </View>
            <View style={{ height: "30%" }}>
              {pico ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check" color="#fff" size={30} />
                </Animatable.View>
              ) : null}
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 30 }}> Open Tasks</Text>
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <FlatList showsVerticalScrollIndicator={false} data={filteredOpenTasks} renderItem={renderOpenTasks} />
      </View>
    </View>
  );
};

//make this component available to the app
export default OpenTasks;
