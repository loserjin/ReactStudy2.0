import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor() {
        super();
    }
    state={
        name: 'baidu'
    }
    render() {
        return <div className=''>
            <input type="text" value={this.state.name}/>
        </div>
    }
}
ReactDOM.render(<App/>,document.getElementById('root'))