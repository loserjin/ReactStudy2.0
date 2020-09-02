import React from "react";
import ReactDOM from "react-dom";

//react的组件只有两个数据源：一个是属性props，一个是状态state
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //当前组件的私有属性
            name: 'sfg',
            time: new Date().toLocaleString()
        }
        this.qqq = 123;
    }

    // 想让视图更新react规定，需要调用setState这个方法
    //也就是setState可以触发视图更新，也就是让render函数执行
    //在render中，不能写setState这个方法执行，会触发死循环
    componentDidMount() {
        //当组件的DOM渲染完成之后，会触发这个函数
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleString
            })
        },1000);
    }

    render() {
        let {className} = this.props;
        let {name, time} = this.state;
        return <div className={className}>
            <h1>{name}</h1>
            <h2>{this.qqq}</h2>
            <h2>{time}</h2>
        </div>
    }
}

ReactDOM.render(<App className="box"/>, document.getElementById('root'));