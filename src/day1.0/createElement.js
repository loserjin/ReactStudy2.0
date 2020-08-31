import React from 'react';//每一个组件都需要引入
import ReactDom from 'react-dom';//一个项目中只需要引入一次即可

let h = <h1>哈哈</h1>;
ReactDom.render(h,
    document.querySelector('#root'));