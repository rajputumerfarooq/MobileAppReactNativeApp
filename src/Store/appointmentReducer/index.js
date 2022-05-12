import {createAction, handleActions} from 'redux-actions';
import { AddAppointment } from "./type";


const initialState = {
    appointment: undefined
}
 
const addAppointment = createAction(AddAppointment); 


 const reducer = handleActions({


    [addAppointment]: (state, action) => {
        //payload = {  name: "Ammer", age: 4 }
        //user = { ...payload}
        //user = {  name: "Ammer", age: 4 }
        return {
            ...state,
            appointment: action.payload ? {...action.payload} : undefined
        }
    },

}, initialState)


export default reducer;