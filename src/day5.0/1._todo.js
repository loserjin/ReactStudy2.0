import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from "./components/list";
import Input from "./components/input";
import {Provider, connect} from 'react-redux';
import store from "./store";

class App extends Component {
    state = {
        todo: ''
    }
    change = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    submit = () => {
        this.setState({todo: ''})
        this.props.dispatch({type: 'TODO_ADD', data: this.state.todo})
    }

    render() {
        return (
            <div>
                <Input value={this.state.todo} onChange={this.change} onSubmit={this.submit}/>
                <List/>
            </div>
        );
    }
}

App = connect((state) => {
    return {}
}, (dispatch) => {
    return {dispatch}
})(App)
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));