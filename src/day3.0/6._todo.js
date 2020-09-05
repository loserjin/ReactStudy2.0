import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    state = {
        todo: '',
        list: []
    }
    change = (e) => {
        // this.state.list.push(this.state.todo)//push返回的是新数组长度
        //没有改变地址，不触发视图更新
        this.setState({
            todo: e.target.value
        })
    }
    keydown = (e) => {
        console.log(e.keyCode);
        if (e.keyCode === 13) {
            //敲的是回车键
            this.setState({
                list: this.state.list.concat(this.state.todo)
            })
        }
    }

    del(n) {
        console.log(n);
        // this.state.list.splice(n, 1)
        this.setState({
            list: this.state.list.filter((item, index) => {
                return index !== n
            })
        })
    }

    render() {
        let {todo, list} = this.state
        return <div>
            <input type="text" value={todo} onChange={this.change} onKeyDown={this.keydown}/>
            <ul>
                {list.map((item, index) => {
                    return <li key={item}>
                        {item}
                        <button onClick={() => {
                            this.del(index)
                        }}>X
                        </button>
                    </li>
                })}
                <li>dfg <button>X</button></li>
            </ul>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));