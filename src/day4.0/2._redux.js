import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import Com1 from "./components/com_1";


console.log(store, store.getState());

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    add = () => {
        store.dispatch({
            type: 'ADD',
            num: 10

        })
        // this.setState({})//使视图更新
    }
    minus = () => {
        store.dispatch({
            type: 'MINUS',
            num: 5
        })
        // this.setState({})//使视图更新
    }
    componentDidMount() {
        //把这个回调函数，放到了某个事件池中
        //事件池中的函数会在数据更新之后默认执行
        store.subscribe(()=>{
            this.setState({})
        })
        store.subscribe(()=>{
            console.log(333)
        })
        store.subscribe(()=>{
            console.log(999)
        })
    }

    render() {
        return <div>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
            <h1>数字是：{store.getState().count}</h1>
            <Com1/>
        </div>;
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));