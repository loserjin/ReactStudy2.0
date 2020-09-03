import React, {useState} from 'react';
//useState是react的一个hook:react hook是为了丰富函数式组件的功能
import ReactDOM from 'react-dom';

/*
想在函数中使用类似于类组件的state，我们需要借助useState这个hook
let [变量名，更改变量的函数的名字] = useState('变量对应的初始值')
 */
function App() {
    let [count, qqq] = useState(1000)
    let [name,setName] = useState("百度")
    let [state, setState] = useState({state:"腾讯"})
    function add() {
        let t = count + 10;
        //qqq(t)执行之后count才会更新，并且触发视图更新
        qqq(t)
        let name = "淘宝";
        setName(name);

    }

    function minus() {
        let t = count - 10;
        qqq(t)
    }
    function changeName(){
        setState({
            ...state,//没有这会直接替换原来的的所有属性，不能是替补式替换
            state: '百度淘宝'
        })
        }
    return <div>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={changeName}>改名字</button>
        <h2>{state.state}</h2>
    </div>;

}

ReactDOM.render(<>
    <App/>
</>, document.getElementById("root"));