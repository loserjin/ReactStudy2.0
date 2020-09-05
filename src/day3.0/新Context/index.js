import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let Context = React.createContext();

class Btn extends React.PureComponent {
    static contextType = Context;

    render() {
        console.log(this)
        return <button>{this.context.title}</button>
    }
}

class Show extends React.PureComponent {
    static contextType = Context;

    render() {
        console.log(this);
        return <div>
            <Btn/>
            hag{this.context.theme}
        </div>;
    }
}

class App extends Component {
    render() {
        return <div className=''>
            <Show>g</Show>
        </div>;
    }
}

ReactDOM.render(
    <Context.Provider value={{theme: 'red', title: '百度'}}>
        <App/>
    </Context.Provider>, document.getElementById('root'));