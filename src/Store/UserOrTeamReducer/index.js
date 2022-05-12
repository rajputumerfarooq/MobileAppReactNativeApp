import {createAction, handleActions} from 'redux-actions';
import { AddUserOrTeam } from "./type";


const initialState = {
    UserOrTeam: undefined
}
 
const addUserOrTeam = createAction(AddUserOrTeam); 


 const reducer = handleActions({


    [addUserOrTeam]: (state, action) => {
        //payload = {  name: "Ammer", age: 4 }
        //user = { ...payload}
        //user = {  name: "Ammer", age: 4 }
        return {
            ...state,
            UserOrTeam: action.payload ? {...action.payload} : undefined
        }
    },

}, initialState)


export default reducer;