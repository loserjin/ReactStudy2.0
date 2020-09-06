import React from "react";
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import store from './store'

class App extends React.Component {

    render() {
        console.log(this.props);
        return <div className=''>
            <button onClick={() => {
                this.props.dispatch({type: 'ADD', count: 100})
                this.props.dispatch({type:'CHANGE_COLOR',col:'yellow'})
            }}>+
            </button>
            <button onClick={() => {
                this.props.dispatch({type: 'MINUS', count: 50})
                this.props.dispatch({type:'CHANGE_COLOR',col:'blue'})
            }}>-</button>
            <h1>{this.props.count}</h1>
            <h6 style={{color:this.props.color}}>{this.props.count}</h6>
        </div>;
    }
}

App = connect((state) => {
    // console.log(state)
    return {
        count: state.countReducer.count,
        color: state.colorReducers.color
    }
}, (dispatch) => {
    return {dispatch}
})(App)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));