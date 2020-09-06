import * as types from './types'

export function add(n) {
    return {type: types.ADD, num: n};
}

export function minus(n) {
    // return {type: types.MINUS, num: n};
    return function (dispatch) {
        setTimeout(() => {
            dispatch({type: types.MINUS, num: n})
        }, 3000);
    }
}