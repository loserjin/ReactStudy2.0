import React from "react";
import ReactDOM from "react-dom";

console.log(React.Component);

//在class组件中,我们的结构是通过render函数返回结果确定的
class App extends React.Component {
    //创造了一个类继承React.Component这个类
    //在render中，我们不用管是否写了constructor都可以正常通过this.props调用到我们的属性
    constructor(props) {
        //在class声明类的时候有一个规定，写了constructor就必须写super()，相当于call
        //super其实就是继承的那个类的函数体React.Component本身
        super(props);
    }

    fn() {
        //this.props中的属性是只读的，不能修改
        console.log(this.props);
    }

    render() {
        this.fn();
        return <div>
            hahaha
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));