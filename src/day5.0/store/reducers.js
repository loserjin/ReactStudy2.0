import * as types from './type.';
export function todoReducer(state={
    list:[]
},option){
    switch (option.type){
        case types.TODO_ADD:
            // state.list.push(option.data)
            return {
                ...state,
                list:state.list.concat(option.data)
            };
        case types.TODO_REMOVE:
            // state.list.splice(option.data,1)
            return {
                ...state,
                list: state.list.filter((item,index)=>index!==option.data)
            };
        default:
            return {
                ...state
            };
    }
}