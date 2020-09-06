import React from "react";
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from "./store";
import Com2 from "./components/com_2";
import {add, minus} from './store/action'

class App extends React.Component {
    add = () => {
        this.props.dispatch(add(12))
        this.props.dispatch({type: 'CHANGE_COLOR', col: 'gold'})
    }
    minus = () => {
        setTimeout(() => {
            this.props.dispatch(minus(10))
        }, 1000)
        this.props.dispatch({type: 'CHANGE_COLOR', col: 'red'})
    }

    render() {
        console.log(this.props)
        let {count, add, minus} = this.props;
        console.log(this);
        return <div className=''>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <h1>{count}</h1>
            <Com2/>
        </div>;
    }
}

App = connect((state) => {
    // state就是我们redux的那个数据对象
    return {
        // aaa:123,
        // bbb: 2334,
        // state,
        count: state.count
    }
}, (dispatch) => {
    // dispatch就是redux的store提供的dispatch
    return {
        add() {
            dispatch({type: 'ADD', num: 10})
        },
        minus() {
            dispatch({type: 'MINUS', num: 5})
        }
    }
})(App)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));