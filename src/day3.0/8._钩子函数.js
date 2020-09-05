import React from "react";
import ReactDOM from "react-dom";

class Page1 extends React.Component {
    state = {
        time: new Date().toLocaleString()
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }

    componentWillUnmount() {
        console.log("page1被销毁")
        //不销毁等到切换到page1时，由于定时器没被销毁会报错
        clearInterval(this.timer)
    }

    render() {
        return <>
            <h1>page1</h1>
            <h2>{this.state.time}</h2>
        </>
    }
}

class Page2 extends React.Component {

    componentWillUnmount() {
        console.log("page2被销毁")
    }

    render() {
        return <h1>page2</h1>
    }
}

//钩子函数，其实就是react在执行的时候，某个对应的阶段 执行某个对应的函数
//React.PureComponent会自动更新新老props和state的校验
//理解成会自动执行shouldComponentUpdate钩子//只会进行一层校验
// class App extends React.PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             name: '123'
//         }
//     }}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '123',
            type: 'page1'
        }
    }

    static getDerivedStateFromProps(props, state) {
        //主要目的是把props中的属性合并到state中
        //props就是从父组件传进来的数据
        //state就是自己的数据
        //这个函数必须返回一个对象
        console.log(props, state);
        return {
            ...props,
            aaa: 12345
        }
    }

    // componentWillMount() {
    //     // DOM渲染完成之前执行（这是将要被废弃的一个钩子函数）
    //     //和getDerivedStateFromProps不能同时使用，会报错
    //     this.state.name=999;
    //     console.log();
    // }
    // componentDidMount() {
    //     //DOM渲染完成之后执行的钩子函数
    //     //操作DOM（echarts 百度地图..）
    //     //发送ajax请求
    //     this.state.name = 999;
    //     console.log();
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // 这个钩子函数可以用来控制组件是否更新
    //     //返回值若是false则当前组件不会更新
    //     console.log(nextProps, nextState);
    //     return false;
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     //当父组件传进来的props更新的时候会触发这个函数（后期将要被废弃）
    //     console.log(111)
    // }

    // componentWillUnmount() {
        //组件销毁前触发
        //一般用来清除事件或者定时器
    // }

    fn = () => {
        this.setState({
            name: '454'
        })
    }

    render() {
        let {type} = this.state;
        return <div className=''>
                <button onClick={this.fn}>====</button>
                {this.state.name}
                <button onClick={()=>{this.setState({type:'page1'})}}>page1</button>
                <button onClick={()=>{this.setState({type:'page2'})}}>page2</button>
                {type==='page1'?<Page1/>:<Page2/>}
                </div>
            }
}



ReactDOM.render(<App/>, document.getElementById('root'));