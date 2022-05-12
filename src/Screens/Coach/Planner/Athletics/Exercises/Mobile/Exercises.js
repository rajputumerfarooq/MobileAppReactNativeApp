//import liraries
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState,useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  Modal,
} from "react-native";
//Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import CheckBox from "@react-native-community/checkbox";
//Styles
import styles from "./styles";
//API
import axios from "axios";
import { API_GET_PLANNER_EXERCISES } from "../../../../../../api/urls";
import {
  _fetchSubCategories,
  createAppointmentSchedular,
} from "../../../../../../api/InvokeApi";

// Redux
import { useDispatch } from "react-redux";
import { AddExercise,EmptyExercises,RemoveExercise } from "../../../../../../Store/ExerciseReducer/type";
import { AddAppointment} from "../../../../../../Store/appointmentReducer/type";
import { useSelector } from "react-redux";

import RBSheet from "react-native-raw-bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import NavigationStrings from "../../../../../../Constants/NavigationStrings";

//animation
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import { bool } from "yup";

// create a component
const Exercises = () => {
  //Navigation
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  //redux
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });



  const refRBSheet = useRef();
  const { exercises } = useSelector((state) => {
    return {
      exercises: state.exerciseReducer.exercises,
    };
  });

  const { appointment } = useSelector((state) => {
    return {
      appointment: state.appointmentReducer.appointment,
    };
  });


  //heading
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(true);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);

  //States
  const [prevdata, setprevData] = useState();
  const [fetchedData, setfetchedData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const [array, setarray] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const requestBody = {
    loggedUser: {
      username: user.userName,
      sessiontoken: user.sessionToken,
    },
  };
  

  useEffect(() => {
    setprevData(route.params.obj.id);

    _fetchExercises();
    console.log(appointment)
  }, []);
  const _fetchAthletics = async () => {};


  const checkIfExerciseAlreadySelected = (id) => {
    var isChecked = false;
    exercises.map( (item)=>{
      if (item.id == id)
        isChecked=true;
      })
    return isChecked;

  }
  // Fetching Data from API
  const _fetchExercises = async () => {
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
      parrentid: "0",
      equipmentid: route.params.obj.id,
    };

    try {
      const response = await axios.post(API_GET_PLANNER_EXERCISES, {
        loggeduser: requestBody.loggedUser,
        parrentid: requestBody.parrentid,
        equipmentid: requestBody.equipmentid,
      });

      //Modifying the Data from Api to have isChecked key value pair
      let temp = response.data;
     let arrayCheck = [];
      temp.map((obj) => {

        
         
      




          (obj.isChecked = checkIfExerciseAlreadySelected(obj.id) ),
          
          (obj.sets = 3),
          (obj.reps = 10),
          (obj.startingWeightKg = 10),
          (obj.increaseWeightKg = 2),
          (obj.maxRestMinutes = 60);

        arrayCheck.push(obj);
      });




      setfetchedData(arrayCheck);
      setfetchedData(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const addExercises = () => {
    let temp = [];

    exercises.map((item) => {
      if (item.isChecked) {



        const exci = {
          id: item.id,
        //  equipmentid: item.equipmentid,
       //   name: item.name,
      //    video: item.video,
      //    gif: item.gif,
       //   description: item.description,
          sets: item.sets,
          reps: item.reps,
          startingWeightKg: item.startingWeightKg,
          increaseWeightKg: item.increaseWeightKg,
          // duration: item.duration,
          maxRestMinutes: item.maxRestMinutes,
        };
        temp.push(exci);
      }
    });
    if (exercises.length == 0) {
      Alert.alert("Select Any Excercise.");
      return;
    }
    const FinalPlannerObject = {
      title: appointment.title,
      description: appointment.description,
      startdate: appointment.startdate,
      enddate: appointment.enddate,
      allday: appointment.allday,
      repeat: appointment.repeat,
      opentask: appointment.opentask,
      locationid: appointment.opentask==true?1:appointment.locationid,
      type: appointment.type,
      excerciselist: temp,
      username: requestBody.loggedUser.username,
    };

    console.log("COOOOOOOOOLLLL")
    console.log(FinalPlannerObject);

     var res=   createAppointmentSchedular(requestBody.loggedUser,FinalPlannerObject);



     if(res.status=200){
     Alert.alert("Appointment Created Successfully.");
     }


     dispatch({type:EmptyExercises,payload:[]})
     dispatch({type:AddAppointment, payload:undefined})

     navigation.navigate(NavigationStrings.STRIKER_PLANNER_STACK, {
      screen: NavigationStrings.STRIKER_PLANNER,
      initial: false,
    });

  };
  const renderExercises = ({ item, index }) => {
    return (
      <View style={styles.boxContainer}>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: 5,
            marginLeft: 5,
          }}

          //  onPress={()=>{ navigation.navigate(NavigationStrings.STRIKER_ATHELTIC_EquipmentTypes, {obj:item} )}}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              marginBottom: 5,
              paddingTop: 10,
            }}
          >
            {" "}
            {item.name}{" "}
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(
                NavigationStrings.STRIKER_ATHELTIC_EXERCISE_DETAIL,
                { obj: item }
              );
            }}
          >
            <Text style={{ fontSize: 13, color: "#f44336", marginLeft: 5 }}>
              View Details ?
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "30%" }}>
              <Image
                style={{
                  resizeMode: "contain",
                  height: 130,
                  width: 110,
                }}
                source={{ uri: item.gif }}
              ></Image>
            </View>

            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", margin: 3 }}>
                <Text>Sets:</Text>
              </View>
              <View style={{ flexDirection: "row", margin: 3 }}>
                <Text>Repetition:</Text>
              </View>
              <View style={{ flexDirection: "row", margin: 2 }}>
                <Text>Starting Weight(kg):</Text>
              </View>
              <View style={{ flexDirection: "row", margin: 2 }}>
                <Text>Increasing Weight(kg):</Text>
              </View>
              <View style={{ flexDirection: "row", margin: 3 }}>
                <Text>Rest Time (Sec):</Text>
              </View>
            </View>
            <View style={{ width: "30%" }}>
              <View style={{ flexDirection: "row", margin: 3, marginTop: -10 }}>
                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#76b729",
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    let array = [...fetchedData];
                    array[index].sets = array[index].sets - 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    width: 35,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      margin: 3,
                      marginLeft: 5,
                      marginRight: 5,
                      color: "#000",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    {item.sets}{" "}
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
                    let array = [...fetchedData];
                    array[index].sets = array[index].sets + 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    let array = [...fetchedData];
                    array[index].reps = array[index].reps - 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 1,
                    marginLeft: 5,
                    width: 35,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                >
                  <Text style={{ margin: 2, color: "#000", fontWeight: "400" }}>
                    {" "}
                    {item.reps}{" "}
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
                    let array = [...fetchedData];
                    array[index].reps = array[index].reps + 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    let array = [...fetchedData];
                    array[index].startingWeightKg =
                      array[index].startingWeightKg - 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 1,
                    marginLeft: 5,
                    width: 35,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                >
                  <Text style={{ margin: 2, color: "#000", fontWeight: "400" }}>
                    {" "}
                    {item.startingWeightKg}{" "}
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
                    let array = [...fetchedData];
                    array[index].startingWeightKg =
                      array[index].startingWeightKg + 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    let array = [...fetchedData];
                    array[index].increaseWeightKg =
                      array[index].increaseWeightKg - 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    margin: 1,
                    marginLeft: 5,
                    width: 35,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                >
                  <Text
                    style={{
                      margin: 2,
                      marginLeft: 5,
                      marginRight: 5,
                      color: "#000",
                      fontWeight: "400",
                    }}
                  >
                    {" "}
                    {item.increaseWeightKg}{" "}
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
                    let array = [...fetchedData];
                    array[index].increaseWeightKg =
                      array[index].increaseWeightKg + 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>
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
                    let array = [...fetchedData];
                    array[index].maxRestMinutes =
                      array[index].maxRestMinutes - 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    -{" "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 5,
                    width: 35,
                    borderRadius: 2,
                    borderColor: "#76b729",
                    borderWidth: 2,
                  }}
                >
                  <Text style={{ margin: 2, color: "#000", fontWeight: "400" }}>
                    {" "}
                    {item.maxRestMinutes}{" "}
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
                    let array = [...fetchedData];
                    array[index].maxRestMinutes =
                      array[index].maxRestMinutes + 1;
                    setfetchedData(array);
                  }}
                >
                  <Text style={{ margin: 2, color: "#fff", fontWeight: "400" }}>
                    {" "}
                    +{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "10%", alignSelf: "center" }}>
              <CheckBox
                // style={{borderColor:'black',color:'#000', backgroundColor:'#000'}}
                onCheckColor={"#76b729"}
                onTintColor={"#76b729"}
                boxType={"square"}
                tintColors={{ true: "#76b729" }}
                disabled={false}
                value={item.isChecked}
                onValueChange={(value) => {
                  let array = [...fetchedData];
                  array[index].isChecked = value;

                    


                    if (value == true) {

                      const tempIndex = {orignalIndex: index}
                      const tempArray = {...array[index], ...tempIndex}
                      
 
                      dispatch({ type: AddExercise, payload: tempArray });
                    }

                    else {
                      dispatch({ type: RemoveExercise, payload: array[index].id });
                    }


                 


                  setfetchedData(array);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

    //Functions
 const renderSelectedExercises = ({ item }) => (
  <View
    style={{
      
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      marginBottom: 20,
      borderRadius: 30
    }}
  >
    <View style={{ justifyContent: "center", alignItems: "center", padding:10 }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginBottom: 5,
          paddingTop: 10,
          color: "#000",
        
        }}
      >
        {item.name}
      </Text>
    </View>

    <View style={{ flexDirection:'row', }}>

        <View style={{flex:.3}}>
         <Image style={{ height: 110, width: 110 , resizeMode:'contain'}} source={{ uri: item.gif }} />
        </View>

      
      <View style = {{flex:.7 ,flexDirection:'column', }}>
     
     
      <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{fontSize:16}} >Sets:</Text>
          <Text style={{fontSize:16}}>{item.sets}</Text>
      </View>

      <View style={{flexDirection:'row',  justifyContent:'space-between', marginRight:20}}>
          <Text style={{fontSize:16}} >Repetition:</Text>
          <Text style={{fontSize:16}}>{item.reps}</Text>
      </View>

      <View style={{flexDirection:'row',   justifyContent:'space-between', marginRight:20}}>
          <Text style={{fontSize:16}} >Starting Weight (Kg):</Text>
          <Text style={{fontSize:16}}>{item.startingWeightKg}</Text>
      </View>

      <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:20}}>
          <Text style={{fontSize:16}} >Increasing Weight (kg):</Text>
          <Text style={{fontSize:16}}>{item.increaseWeightKg}</Text>
      </View>

      <View style={{flexDirection:'row',  justifyContent:'space-between', marginRight:20}}>
          <Text style={{fontSize:16}} >Rest Time (kg):</Text>
          <Text style={{fontSize:16}}>{item.maxRestMinutes}</Text>
      </View>

       </View>
    </View>


    <TouchableOpacity
      onPress={ () => {
        dispatch({ type: RemoveExercise, payload: item.id });


        let tempArray = [...fetchedData];
        finalArray = [];
        tempArray.map( (obj)=>{
          if (obj.id == item.id) {
            obj.isChecked =  !obj.isChecked;
          }
          finalArray.push(obj);
        })

        setfetchedData(finalArray)
        


      }}
      style={{ width:'80%', padding:10, alignItems:'center' }}
    >
      <View>
        <Text style={{fontSize:18, color:"#f44336"}}>
          Dellete ?
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);

  return (
    <View style={styles.container}>
      <View style={styles.boxContainerRow}>
        <TouchableOpacity //onPress={() => _fetchGolf()}
        >
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

        <TouchableOpacity onPress={() => _fetchAthletics()}>
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
      {/* First Part of Screen */}

      <View style={{ flexDirection: "row", marginBottom: 5 }}>
        <View style={{ width: "20%" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 0, marginLeft: 20 }}
          >
            <Ionicons name="arrow-back-sharp" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "60%", alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            EXCERCISE LIST
          </Text>
        </View>
      </View>
      <View style={{ flex: 0.85, width: "100%" }}>
        <FlatList
          data={fetchedData}
          keyExtractor={(item) => item.id}
          renderItem={renderExercises}
        />
      </View>

      <View style={{ flex: 0.15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() =>

              refRBSheet.current.open()
              // navigation.navigate(
              //   NavigationStrings.STRIKER_ATHLETIC_VIEW_EXERCISE
              // )
            }
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              borderColor: "#76b729",
              borderWidth: 2,
            }}
          >
            <Text style={{ margin: 10, color: "#76b729", fontWeight: "400" }}>
              {" "}
              View Exercises + {exercises.length}{" "} 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              backgroundColor: "#76b729",
              borderColor: "#76b729",
              borderWidth: 2,
            }}
            onPress={addExercises}
          >
            <Text style={{ margin: 10, color: "#fff", fontWeight: "400" }}>
              {" "}
              Create Appointment{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>





      {/* Modal */}



      <RBSheet
        animationType="fade"
        ref={refRBSheet}
      dragFromTopOnly={true}
        closeOnDragDown={true}
        dragFromTopOnly={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        height={550}
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



      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Selected Exercises</Text>

    
            <FlatList data={exercises} showsVerticalScrollIndicator={false}  renderItem={renderSelectedExercises} />
        

     
      </RBSheet>
{/* 
      <Modal
        animationType="slide"
        transparent={true}
        closeOnDragDown={true}
        closeOnPressMask={true}
        closeOnPressBack={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <View style={{ flexDirection: "row", marginTop: 10, backgroundColor:'grey' }}>
            <View style={{ width: "20%" }}>
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                style={{ marginTop: 0, marginLeft: 20 }}
              >
                <Ionicons name="arrow-back-sharp" size={30} />
              </TouchableOpacity>
            </View>
            <View style={{ width: "60%", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Selected Exercises
              </Text>
            </View>
            <View style={{ width: "20%", alignItems: "center" }}>

            </View>
          </View>


        
          <View style={{ marginTop: 10, }}>
            <FlatList data={exercises} renderItem={renderSelectedExercises} />
          </View>

          </View>
        </View>
      </Modal> */}
    </View>
  );
};

//make this component available to the app
export default Exercises;
