import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    del(index){
        this.props.dispatch({type:'TODO_REMOVE',data:index})
    }
    render() {
        let {list123} = this.props
        return (
            <ul>
                <li>
                    {
                        list123.map((item,index)=> <li key={item}>{item}<button onClick={()=>{this.del(index)}}>X</button></li>)
                    }
                </li>
            </ul>
        );
    }
}

let List123 = connect((state) => {
    return {
        list123: state.todo.list
    }
},(dispatch)=>{
    return {dispatch};
})(List)
export default List123;

