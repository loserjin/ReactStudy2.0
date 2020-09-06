import {createStore, combineReducers} from "redux";
import {countReducer, colorReducers} from './reducers';
//combineReducers可以把多个Reducers合并成一个
let rootReducer = combineReducers({
    countReducer,
    colorReducers
})
// let rootReducer = combineReducers({
//     qqq:countReducer,
//     www:colorReducers
// })
let store = createStore(rootReducer);
console.log(store.getState())
export default store;