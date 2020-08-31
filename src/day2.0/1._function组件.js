import React from "react";
import ReactDOM from "react-dom";

let str = "hello";

//react中组件名首字母必须大写
function App(props) {
    return (<div>
        <h1 style={{color: props.color}}>{str}</h1>
        <p className={props.className}>{props.item}</p>
        <i>{props.id}</i>
    </div>)
}

function H1() {
    return <h1>这样也可以</h1>
}

//在使用组件的时候写的行内属性，我们可以在函数内部通过props接收
//='666'这样的是字符串，{666}这样的是数字
//凡是在组件上使用的行内属性，都是自定义属性
//在原生HTML标签上使用的属性，都是react规定的
ReactDOM.render(<>
        <App className='box' id={666} item='xxx' color="red"/>
        <H1/>
    </>,
    document.getElementById('root'));