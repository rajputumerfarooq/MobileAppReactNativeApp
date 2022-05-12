import {createAction, handleActions} from 'redux-actions';
import { SetSelectedUser } from "./type";


const initialState = {
    selecteduser: undefined
}
 
const setSelectedUser = createAction(SetSelectedUser); 


 const reducer = handleActions({


    [setSelectedUser]: (state, action) => {
        //payload = {  name: "Ammer", age: 4 }
        //user = { ...payload}
        //user = {  name: "Ammer", age: 4 }
        return {
            ...state,
            selecteduser: action.payload ? {...action.payload} : undefined
        }
    },

}, initialState)


export default reducer;