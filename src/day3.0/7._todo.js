import React from "react";
import ReactDOM from "react-dom";
import List from './components/list';
import Input from "./components/input";

class App extends React.Component {
    constructor() {
        super();
    }

    state = {
        todo: '',
        data: []
    }
    change = (e) => {
        this.setState({
            todo: e.target.value
        })
    }
    submit = () => {
        console.log('submit')
        this.setState({
            data: this.state.data.concat(this.state.todo),
            todo: ''
        })
    }
    del = (n) => {
        console.log(n)
        this.setState({
            data: this.data.filter((item, index) => index !== n)
        })
    }

render()
{
    let {todo, data} = this.state;
    return <div className=''>
        <Input value={todo}
               onEnter={this.submit}
               onChange={this.change}/>
        <List data={data} onDel={this.del}>d</List>
    </div>
}
}

ReactDOM.render(<App/>, document.getElementById('root'))