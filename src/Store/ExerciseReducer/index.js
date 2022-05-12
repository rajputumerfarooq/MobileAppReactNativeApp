import {createAction, handleActions} from 'redux-actions';
import { AddExercise, RemoveExercise, EmptyExercises } from "./type";


const initialState = {
    exercises:[]

}


const addExercise = createAction(AddExercise);
const removeExercise = createAction(RemoveExercise);
const emptyExercises = createAction(EmptyExercises);


 const reducer = handleActions({


    [addExercise]: (state, action) => {



        return {
            exercises: [...state.exercises, action.payload]
        }
    },
    [removeExercise]: (state, action) =>{
        
        const savedExercise = state.exercises;


        const newExercises = []

        savedExercise.map( (item) => {
            if (item.id != action.payload) {  

                newExercises.push(item)

            }
        })


        return {
            ...state,
            exercises: newExercises
        }


    },
    [emptyExercises]: (state, action) =>{
        
        return{
            ...state,
            exercises:[]
        }
    
    },


    

}, initialState)



export default reducer;