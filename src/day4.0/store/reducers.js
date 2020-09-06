import React from "react";
import * as types from './types'
export default function countReducers(state, option) {
    //纯函数 函数执行对外部没有什么副作用
    state = state || {count: 100, name: '百度'};
    switch (option.type) {
        case types.ADD:
            return {
                ...state,
                count: state.count + option.num
            };

        case types.MINUS:
            return {
                ...state,
                count: state.count - option.num
            };
        default:
            return state;
    }
}
