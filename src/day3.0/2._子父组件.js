import React, {Component} from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';//专门用来处理传进来的数据的情况
//限制传进来的数据的情况
//一般当我们去创造一些复用性组件的时候，才会选择使用限制
//父组件使用子组件的数据，通过参数传递
class Button extends Component {
    static propTypes = {
        // className: propTypes.string//className必须是一个字符串
        className: propTypes.oneOfType([propTypes.string, propTypes.string, propTypes.number])
    }
    static defaultProps = {
        //给默认值的
        className :'moren'
    }
    state={
        name: '百度666'
    }
    click = ()=>{
        this.props.onClick&&this.props.onClick()
        this.props.onChangeName&&this.props.onChangeName(this.state.name)
    }
    render() {
        //children对应的就是组件标签包含的所有内容：
        // 有三种情况：字符串（纯文本），数组（多个子节点），对象（单个节点）
        let {className, children = "按钮"} = this.props//onClick->fn
        // let str = 'hello'
        // let ary = ['hahah', <i key='dfa'>jklajgf</i>];
        // let b = <b>hhh</b>
        // return <button className={className} onClick={onClick}>{children}{str}{ary}{b}</button>
        return <button className={className} onClick={this.click}>{children}</button>
    }
}
//Button.defaultProps = {}等同于static defaultProps={}
class App extends React.Component {
    constructor() {
        super();
    }

    state = {
        name: '百度',
        className: 'box'
    }

    fn() {
        console.log(666)
        this.setState({
            name: '淘宝'
        })
    }
    change = (name)=>{
        this.setState({
            name: name
        })
    }
    render() {
        //Button组件就是App组件的子组件，App就是Button组件的父组件
        let {name, className} = this.state;
        return <div className='box'>
            <Button className={className}>百度</Button>
            <Button onClick={this.fn.bind(this)}>淘宝<i>baid</i></Button>
            <Button onChangeName={this.change}></Button>
            <h1>{name}</h1>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));