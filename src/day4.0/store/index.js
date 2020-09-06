import {createStore, combineReducers, applyMiddleware} from "redux";
import React from "react";
import {countReducers, colorReducers} from "./reducers";
import thunk from 'redux-thunk';
//combineReducers把多个reducers合成一个reducers
let rootReducers = combineReducers({
    countReducers,
    colorReducers
})


let store = createStore(rootReducers,applyMiddleware(thunk));
console.log(store.getState())
export default store;