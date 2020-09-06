import React, {Component} from 'react';
import ReactDOM from 'react-dom';

function connect(obj) {
    return function (Com) {
        class Temp extends React.Component {
            render() {
                return <Com name={obj.name}/>
            }
        }

        return Temp;
    }
}

class App extends Component {
    render() {
        console.log(this);
        return (
            <div className=''>

            </div>
        );
    }
}

App = connect({name: '百度'})(App)
ReactDOM.render(<App/>, document.getElementById('root'));