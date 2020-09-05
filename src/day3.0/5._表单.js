import React from 'react';
import ReactDOM from 'react-dom';

//非受控组件，表单不受组件的数据控制（操作DOM）
//受控组件，表单受本组件的数据控制，
class App extends React.Component {
    constructor() {
        super();
    }

    state = {
        name: 'baidu'
    }

    componentDidMount() {
        // this.inp.value = this.state.name//操作DOM
    }

    change = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    fn = () => {
        console.log(this.state.name)
    }

    render() {
        return <div className=''>
            <button onClick={this.fn}>qqq</button>
            {/*<input type="text" ref={(el)=>{this.inp=el}}/>//操作DOM*/}
            <input type="text" value={this.state.name} onChange={this.change}/>
            <p>{this.state.name}</p>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))