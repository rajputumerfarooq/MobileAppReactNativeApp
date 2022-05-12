import {applyMiddleware, createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

//Reducers
import userReducer from './userReducer'
import exerciseReducer from './ExerciseReducer';
import appointmentReducer from './appointmentReducer'
import UserOrTeamReducer from './UserOrTeamReducer'
import SelectedUserReducer from './selectedUserReducer'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["userReducer", "exerciseReducer", "appointmentReducer","UserOrTeamReducer","SelectedUserReducer"]
};


const appReducer = combineReducers({

    "userReducer": userReducer,
    "exerciseReducer": exerciseReducer,
    "appointmentReducer": appointmentReducer,
    "UserOrTeamReducer":UserOrTeamReducer,
    "SelectedUserReducer": SelectedUserReducer,
});

const rootReducer = (state, action) => {


    // when a resetReduxState action is dispatched it will reset redux state
    if (action.type === 'resetReduxState') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = createStore(persistedReducer, applyMiddleware(logger));


export const persistor = persistStore(store);
