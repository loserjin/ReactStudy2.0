import * as types from './types';

let initState = {
    count: 100
}

// reducer有两个作用,初始化state,改变数据
export function countReducer(state, option) {
    state = state || initState;
    switch (option.type) {
        case types.ADD:
            return {
                ...state,
                count: state.count + option.count
            }
        case types.MINUS:
            return {
                ...state,
                count: state.count - option.count
            }
        default:
            return state
    }
}

export function colorReducers(state, option) {
    state = state || {color: 'red'}
    switch (option.type) {
        case types.CHANGE_COLOR:
            return {
                ...state,
                color: option.col
            }
        default:
            return state;
    }
}