import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
//useState是为了让函数式组件使用setState
//useEffect是为了让函数式组件使用钩子函数
function App(props) {
    let [count, setCount] = useState(100);
    let [name,setName] = useState("百度")
    // useEffect类似于componentDidMount和componentDidUpdate的结合体
    //可以通过第二个参数决定当前的这个回调函数啥时变量发生的时候执行，不传则任意一个变量改变都执行
    useEffect(()=>{
        console.log(count)
    },[count])
    useEffect(()=>{
        console.log(count)
    },[])//若传递一个空函数，那么只在初次加载的时候执行
    return <div>
        <button onClick={setCount.bind(null, count + 1)}>change</button>
        <h1>{count}</h1>
        <button onClick={()=>{setName("淘宝")}}>改名字</button>
        <h2>{name}</h2>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'));