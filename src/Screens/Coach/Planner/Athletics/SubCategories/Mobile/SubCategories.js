//import liraries
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ImageBackground , Image} from "react-native";

//animation 
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
//Styles
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
//API
import axios from "axios";
import { API_GET_PLANNER_SUBCATEGORIES } from "../../../../../../api/urls";
import { _fetchSubCategories } from "../../../../../../api/InvokeApi";
//Redux
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
// Navigation
import {  useNavigation, useRoute } from "@react-navigation/native";
import NavigationStrings from "../../../../../../Constants/NavigationStrings";


// create a component
const SubCategories = () => {
  const [gico, setGico] = useState(false);
  const [aico, setAico] = useState(true);
  const [nico, setNico] = useState(false);
  const [mico, setMico] = useState(false);
  const [pico, setPico] = useState(false);
    
  const route = useRoute();
  const navigation =useNavigation();
  //States
  const [Data, setData] = useState([]);
  //redux
  const { user } = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });


 
    
  //Component Did Mount
  useEffect(() => {
    _fetchSubCategoriesFUNC();
    
  }, []);
  
const _fetchAthletics = async () => {
 
};
const _fetchGolf = async () => {
 // navigation.navigate(NavigationStrings.STRIKER_GOLF_STACK,{appointment:route.params.appointment});
};
  // Fetching Data from API
  const _fetchSubCategoriesFUNC = async () => {
    const requestBody = {
      loggedUser: {
        username: user.userName,
        sessiontoken: user.sessionToken,
      },
      parentid: "2",
    };

    //const response = await _fetchSubCategories(requestBody.loggedUser,requestBody.parentid)

    try {
      const response = await axios.post(API_GET_PLANNER_SUBCATEGORIES, {
        loggeduser: requestBody.loggedUser,
        parrentid: requestBody.parentid,
      });

      setData(response.data);
      console.log(Data);
    } catch (error) {
      alert(error);
    }
  };

  const renderSubCategory = ({ item }) => {
    <TouchableOpacity style={styles.boxContainer}>
      <Text>{item.name}</Text>
    </TouchableOpacity>;
  };

  return (
    <View style={styles.container}>
      
   <View style={styles.boxContainerRow}>



<TouchableOpacity onPress={() => _fetchGolf()}
>
    <View style={styles.title_box1}>
        <View style={{ height: '70%', justifyContent: 'flex-end' }}><Text style={styles.title_text}>G</Text></View>
        <View style={{ height: '30%' }}>
            {gico ?
                <Animatable.View animation="bounceIn" >
                    <Feather
                        name="check"
                        color="#fff"
                        size={30}
                    />
                </Animatable.View>
                : null}


        </View>

    </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => _fetchAthletics()}>
    <View style={styles.title_box2}>
        <View style={{ height: '70%', justifyContent: 'flex-end' }}><Text style={styles.title_text}>A</Text></View>
        <View style={{ height: '30%' }}>

            {aico ?
                <Animatable.View animation="bounceIn" >
                    <Feather
                        name="check"
                        color="#fff"
                        size={30}
                    />
                </Animatable.View>
                : null}

        </View>





    </View>

</TouchableOpacity>

<TouchableOpacity //onPress={() => _fetchN()}
>
    <View style={styles.title_box3}>

        <View style={{ height: '70%', justifyContent: 'flex-end' }}><Text style={styles.title_text}>N</Text></View>
        <View style={{ height: '30%' }}>

            {nico ?
                <Animatable.View animation="bounceIn" >
                    <Feather
                        name="check"
                        color="#fff"
                        size={30}
                    />
                </Animatable.View>
                : null}

        </View>


    </View>
</TouchableOpacity>

<TouchableOpacity  //onPress={() => _fetchM()}
>
    <View style={styles.title_box4}>

        <View style={{ height: '70%', justifyContent: 'flex-end' }}><Text style={styles.title_text}>M</Text></View>
        <View style={{ height: '30%' }}>

            {mico ?
                <Animatable.View animation="bounceIn" >
                    <Feather
                        name="check"
                        color="#fff"
                        size={30}
                    />
                </Animatable.View>
                : null}

        </View>

    </View>

</TouchableOpacity>
<TouchableOpacity //onPress={() => _fetchP()}
>
                    <View style={styles.box_oprntask}>

                        <View style={{ height: '70%', justifyContent: 'flex-end' }}><Text style={styles.title_text}>P</Text></View>
                        <View style={{ height: '30%' }}>

                            {pico ?
                                <Animatable.View animation="bounceIn" >
                                    <Feather
                                        name="check"
                                        color="#fff"
                                        size={30}
                                    />
                                </Animatable.View>
                                : null}

                        </View>

                    </View>

                </TouchableOpacity>
</View>


<View style={{ flexDirection:'row' ,marginBottom:5}}>
            <View style={{width:'20%'}}><TouchableOpacity
               onPress={() => navigation.goBack()}
               style={{ marginTop: 0, marginLeft: 20 }}
             >
               <Ionicons name="arrow-back-sharp" size={30} />
             </TouchableOpacity></View> 
            <View style={{width:'60%',alignItems:'center'}}>
            
              <Text style={{fontSize:20,fontWeight:'bold'}}>ATHELTIC CATEGORIES</Text></View>
              </View>

 

   
    


    
      <FlatList
      columnWrapperStyle={{justifyContent: 'space-around'}}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        numColumns={2}
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
          style={{
            marginTop: 16,
            width: "45%",
            height: 170,
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 13,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(122,181,29,.25)",
              padding: 12,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 13,
              borderTopLeftRadius: 13,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  NavigationStrings.STRIKER_ATHELTIC_BODYTYPES,
                  { obj: item }
                )
              }
            >
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationStrings.STRIKER_ATHELTIC_BODYTYPES, {
                obj: item,
              })
            }
          >
            <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: 100,
              }}
              source={{ uri: item.picture }}
            ></Image>
          </TouchableOpacity>
        </View>
        )}
      />
 
    </View>
  );
};

//make this component available to the app
export default SubCategories;
