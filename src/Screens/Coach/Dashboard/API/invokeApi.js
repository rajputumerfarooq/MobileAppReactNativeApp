
import axios from 'axios';


const API_GET_CONNECTED_USERS = "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/teams/getconntecteduser";
const API_GET_CONNECTED_TEAMS = "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/teams/getteams";
const API_GET_TEAM_MEMBERS = "https://5wt24cxni9.execute-api.us-east-1.amazonaws.com/dev/teams/getteammembers";

export const getConnectedUsers =  (loggedUser,userId) => {
    try {
     const response =  axios.post( API_GET_CONNECTED_USERS, { loggeduser:loggedUser, userid: userId, }); 

        return response;

    } catch (error) {
        alert("Internal Server Error");  }
}


export const getConnectedTeams =  (loggedUser,userId) => {
    try {
     const response =  axios.post( API_GET_CONNECTED_TEAMS, { loggeduser:loggedUser, userid: userId, }); 

        return response;

    } catch (error) {
        alert("Internal Server Error");  }
}



export const getConnectedTeamMembers =  (loggedUser,teamId) => {
    try {
     const response =  axios.post( API_GET_TEAM_MEMBERS, { loggeduser:loggedUser, teamid: teamId, }); 

        return response;

    } catch (error) {
        alert("Internal Server Error");  }
}
