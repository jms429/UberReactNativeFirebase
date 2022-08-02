import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import 'expo-asset';


//a reducer is a function that takes in the current state and an action and returns a new state
//this is the reducers object that combines all the reducers
let reducers = combineReducers({
    cartReducer: cartReducer,
})

//this is the root reducer which combines all the reducers
const rootReducer = (state, action) => {
    return reducers(state, action);
}

export default rootReducer;