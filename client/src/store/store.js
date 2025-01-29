
// Import necessary functions and middleware from Redux and Redux Thunk
import {combineReducers} from 'redux';
import {createStore,applyMiddleware} from 'redux'

import {thunk} from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
// Import the pizza reducer
import { getAllPizzasReducer } from '../reducer/pizzaReducer';
import { cartReducer } from '../reducer/cartReducer';


// Combine reducers into a single root reducer
const finalReducer = combineReducers({
    // Associate the pizza reducer with the key 'getAllPizzasReducer'
    getAllPizzasReducer : getAllPizzasReducer ,
    cartReducer : cartReducer,
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
// Associate the pizza reducer with the key 'getAllPizzasReducer'
const initialState = {
    cartReducer : {
        cartItems : cartItems
    }
}

// Enhance the store with Redux DevTools extension support
const composeEnhancer = composeWithDevTools({})

// Create the Redux store with the combined reducers, initial state, and middleware
//create store 
const store = createStore(finalReducer,initialState,composeEnhancer(applyMiddleware(thunk))) // Root reducer ,Initial state,Store enhancer for applying middleware and devtools,// Apply thunk middleware for handling async actions

export default store;