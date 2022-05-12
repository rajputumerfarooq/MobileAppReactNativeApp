import axios from "axios";
import {
  API_LOGIN_URL,
  API_ALL_APPOINTMENT_FOR_SCHEDULAR_URL,
  API_GET_CONNECTED_USERS,
  API_GET_COUNTRIES,
  API_GET_States,
  API_GET_STATES,
  API_GET_CITIES,
  API_GET_ROLES,
  API_GET_STRIKERS,
  API_GET_COACHES,
  API_GET_PLANNER_SUBCATEGORIES,
  API_GET_Create_Appointment,
  API_GET_Planner_Locations,
  API_GET_ALLOPENTASKS,
  API_GET_UPDATE_SCHEDULAR_TASKS,
  API_SAVE_USER_LOCATIONS,
  API_ALL_APPOINTMENT_FOR_DASHBOARD_URL
} from "./urls";

export const apiLogin = async (email, funcPassword) => {
  try {
    console.log('besfore')
    const response = await axios.post("https://du9sycvyuh.execute-api.eu-central-1.amazonaws.com/dev/user/login", {
      username: email,
      password: funcPassword,
    });
  console.log(response)
    return response;
  } catch (error) {
    alert("Username or password is incorrect",error);
    return "400";
    
  }
};

export const apiGetAppointmentsforSchedular = async (LoggedUser, username,dateFrom='',dateTo='' ) => {
  try {
    console.log('===========================================umererere',username)
    const response = await axios.post(API_ALL_APPOINTMENT_FOR_SCHEDULAR_URL, {
      loggeduser: LoggedUser,
      username: username,
      dateFrom:'',dateTo:'', 
    });

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};

export const apiGetAppointmentsforDashboard = async (LoggedUser, type,userId) => {
  try {
    console.log(LoggedUser,type,userId)
    const response = await axios.post(API_ALL_APPOINTMENT_FOR_DASHBOARD_URL, {
      loggeduser: LoggedUser,
      type: type,
      userId:userId
    });
console.log('---------------------------------------------------------------------------------',response.data)
    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};

export const getConnectedUsers = async (loggedUser) => {
  try {


console.log('-------/////////////////////////////////////////////////////////////////////////////////////////////////',loggedUser)

    const response = await axios.post(API_GET_CONNECTED_USERS, {
      loggeduser: loggedUser
    });

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};

export const getCountries = async () => {
  try {
    const response = await axios.get(API_GET_COUNTRIES);

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};
export const getRoles = async () => {
  try {
    const response = await axios.get(API_GET_ROLES);

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};

export const getStates = async (id) => {
  try {
    const response = await axios.post(API_GET_STATES, { ID: id });

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};
export const getCities = async (id) => {
  try {
    const response = await axios.post(API_GET_CITIES, { ID: id });

    return response;
  } catch (error) {
    return "400";
    alert("Username or password is incorrect");
  }
};


export const getStrikers = async (funcLoggeduser,funcid) => {
    try {

      
      const response = await axios.post(API_GET_STRIKERS, {loggeduser:funcLoggeduser, id: funcid });
  
      return response;
    } catch (error) {
      return "400";
        alert("Username or password is incorrect");
    }
  };



  export const createAppointmentSchedular = async (funcLoggeduser,appointment) => {
    try {




      
      const response = await axios.post(API_GET_Create_Appointment, {loggeduser:funcLoggeduser,   
        title:appointment.title,
        description:appointment.description,
        startdate:appointment.startdate,
        enddate:appointment.enddate,
        allday:appointment.allday,
        repeat:appointment.repeat,
        opentask:appointment.opentask,
        locationid:appointment.locationid,
        type:appointment.type,
        username:appointment.username,
        excerciselist:appointment.excerciselist });
      
  
 
  console.log(funcLoggeduser,response.status);
      return response;
    } catch (error) {
       
      console.log(error)
      return "502";
       
    }
  };





  export const GetPlannerLocations = async (funcLoggeduser) => {
    try {

     console.log(funcLoggeduser)
      const response = await axios.post(API_GET_Planner_Locations, {loggeduser:funcLoggeduser });
      
      
      return response;
    } catch (error) {
       
      console.log(' \n',error)
      return "502";
       
    }
  };


  export const getCoaches = async (funcLoggeduser,funcid) => {
    try {
      
      const response = await axios.post(API_GET_COACHES, {loggeduser:funcLoggeduser, id: funcid });
  
      return response;
    } catch (error) {
      return "400";
        alert("Username or password is incorrect");
    }
  };
  

  export const _fetchSubCategories = async (funcLoggeduser,id) => {
    


    try {

    
      const response = await axios.post(        API_GET_PLANNER_SUBCATEGORIES,{loggeduser:funcLoggeduser, parrentid: id }
        
      );

   
      return response 



    } catch (error) {
        alert(error)
        console.log("ss")

    }
  };



  export const _fetchAllOpenTasks = async (requestBody) => {

    try {
      const result = await axios.post(
        API_GET_ALLOPENTASKS,
        { loggeduser: requestBody.loggedUser, username: requestBody.username }
      );
      return(result);
    }

    catch(error) {
      alert(error)
    }




  };

  export const _updateOpenTasks = async (funcLoggeduser,appointment) => {

    try {
      console.log(appointment)
      const result = await axios.post(
        //"https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/scheduler/updateschedulartasks",
        API_GET_UPDATE_SCHEDULAR_TASKS,
        { loggeduser: funcLoggeduser, 
        
          username:appointment.username,
          title: appointment.title,
          description: appointment.description,
          startdate:appointment.startdate,  
      
          enddate:appointment.enddate,
          opentask: 0,
          allday:0,
          repeat:0,
          locationid: appointment.locationid,
          id: appointment.id,
        
        }
      );
      return(result);
    }

    catch(error) {
      console.log(error)
      alert(error)
    }




  };





  ///add user locatoins

  export const _addUserLocations = async (funcLoggeduser,locations) => {

    try {
  //  console.log(funcLoggeduser.userid,locations)
      const result = await axios.post(
         
        API_SAVE_USER_LOCATIONS,
        { loggeduser: funcLoggeduser, 
        
          long: locations.longitude,

          lat: locations.latitude,
    
          userId: funcLoggeduser.userId
        
        }
      );
  //    console.log(result)
      return(result);
    }

    catch(error) {
      console.log(error)
      alert(error)
    }




  };