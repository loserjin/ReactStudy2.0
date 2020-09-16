export function createStore(reducer,fn) {
    let state;//state就是用来存储公用数据的
    let listeners = []
    let getState = function () {
        //这个函数只是用来返回state的
        return state && JSON.parse(JSON.stringify(state));
    }
    let dispatch = function (action) {
        //用来触发reducer
        state = reducer(state, action)
        listeners.forEach(item => {
            item && item()
        })
    }

    dispatch({})//是为了给私有变量state一个初始值
    let subscribe = function (f) {
        listeners.push(f)
        return () => {
            listeners = listeners.filter(item => item !== f)
        }
    }
    if(typeof fn==="function"){
        return fn(createStore)(reducer)
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}

export function combineReducers(obj) {
    return function (state = {}, action) {
        Object.keys(obj).forEach(item => {
            state[item] = obj[item](state[item], action)
        })
        return state
    }
}

export function applyMiddleware(middleware) {
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer)
            let middle = middleware(store)
            let temp = middle(store.dispatch)//temp是一个新的dispatch
            return {
                ...store,
                dispatch: temp
            }
        }
    }
}