import {createStore} from 'redux';
import reducer from './reducers/Index';

//configureStore is a function that takes in a reducer and returns a store
export default function configureStore(initialState) {

    
    //configureStore is a function that takes in a reducer and returns a store
    //a store is an object that holds the state of the application
    const store = createStore(reducer, initialState);
    return store;
}