import {createStore, combineReducers, applyMiddleware} from "redux";
import {todoReducer} from "./reducers";
import thunk from 'redux-thunk';
let rootReducer = combineReducers({
    todo: todoReducer
});
let store = createStore(rootReducer,applyMiddleware(thunk));
export default store;