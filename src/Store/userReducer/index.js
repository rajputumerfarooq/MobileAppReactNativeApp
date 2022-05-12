import {createAction, handleActions} from 'redux-actions';
import { SetUser } from "./type";


const initialState = {
    user: undefined
}
 
const setUser = createAction(SetUser); 


 const reducer = handleActions({


    [setUser]: (state, action) => {
        //payload = {  name: "Ammer", age: 4 }
        //user = { ...payload}
        //user = {  name: "Ammer", age: 4 }
        return {
            ...state,
            user: action.payload ? {...action.payload} : undefined
        }
    },

}, initialState)


export default reducer;