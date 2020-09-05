import React from "react";
import ReactDOM from "react-dom";
class Button extends React.Component{
    constructor() {
        super();
    }
    render() {
        return <button>hhh</button>
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.www = React.createRef()
    }
    fn=()=>{
        console.log(document.getElementsByClassName('qqq')[0])

        console.log(this.refs.qqq)
        console.log(this.qqq)
        console.log(this.www.current)
        console.log(this.btn)
    }
    //三种获取组件或DOM元素的方式
    //ref='xxx' this.refs.xxx这种方式后期将要被废弃//最老方式
    //ref不能获取函数式组件
    // ref={(el)=>{this.xxx=el}} this.xxx
    // this.xxx = React.createRef() this.xxx.cuttent //最新方式
    render() {
        return <div className="">
            <button onClick={this.fn}>获取</button>
            <h1 className="qqq" ref="qqq" >hello</h1>
            <h1 className="qqq" ref={(el)=>{this.qqq=el}}>hello</h1>
            <h1 ref={this.www}>hello</h1>
            <Button ref={(el)=>{this.btn=el}}>hhh</Button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));