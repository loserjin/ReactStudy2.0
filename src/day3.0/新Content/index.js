import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let Context = React.createContext()
class Btnm extends React.Component{

    render() {
        console.log(this)
        return <button>{this.context.title}</button>
    }
}
class Show extends React.Component{
    static contextType = Context;
    render() {
        console.log(this);
        return <div>
            hag{this.context.theme}
        </div>;
    }
}
class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className=''>
                <Btnm/>
                <Show>g</Show>
            </div>
        );
    }
}

ReactDOM.render(
    <Context className="Provider" value={{theme:'red',title:'百度'}}>
        <App/>
    </Context>, document.getElementById('root'));