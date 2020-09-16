import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Link, Route, Switch, Redirect, NavLink} from "react-router-dom";
import Protect from "./components/protect";
// BrowserRouter利用的是H5 history Api,对比vue就是history默认是popState
//HashRouter利用的是hashChange，对比vue就是hash模式
//项目中，我们需要使用这两个组件中的一个把根组件包起来
//Link相当于Vue的router-link,用来跳转对应（to属性跟的值）路径
//route相当于Vue的router-view，用来展示对应路径，对应的那个组件
//Switch用这个组件把用到的Route包起来，可以避免react每一个Route都去匹配的情形（只识别外层的元素）可以加exact解决
// NavLink用法等同于Link;比Link多一个类名active
//子路由 属于哪个组件的子路径 就在哪个组件中编写Link和Route
//在react里面我们可以使用search或者params的方式进行参数传递
//若是search的方式，我们可以通过location.search或者this.props.location.search
//若是params我们需要在编写Route组件的时候 /xxx/:属性名,调用的时候 我们通过this.props.match.params
//react中的路由懒加载 插件react-loadable
// import Home from "./components/home";
// import User from "./components/user";
// import Loadable from 'react-loadable';
//

// function myloaderable(obj) {
//     let {loader, loading: Loading} = obj;
//     let Bar = null;
//     return function Temp() {
//         // let [Bar, setBar] = useState(null);
//         let [flag, setFlag] = useState(false);
//         useEffect(() => {
//             loader().then(data => {
//                 Bar = data.default
//                 setFlag(true)
//             })
//         }, [])
//         return <>
//             {Bar ? <Bar/> : <Loading/>}
//         </>
//     }
// }
function myloaderable(obj){
    let {loader,loading:Loading} = obj;
    return class Temp extends React.Component{
        state = {
            Bar:null
        }
        componentDidMount() {
            loader().then(data=>{
                this.setState({
                    Bar: data.default
                })
            })
        }
        render(){
            let {Bar} = this.state;
            return <>
                {Bar ? <Bar {...this.props}/> : <div>6666</div>}
            </>
        }
    }
}
let Home = myloaderable({
    loader: () => import(/*webpackChunkName:"home"*/'./components/home'),
    loading: () => <h3>正在加载</h3>
})
let User = myloaderable({
    loader: () => import(/*webpackChunkName:"user"*/"./components/user"),
    loading: () => <h3>正在加载</h3>
})
let Temp = () => <h1>哈哈哈哈哈</h1>

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>
            <Link to='/home/666'>首页</Link>
            <Link to='/user'>用户</Link>
            <NavLink to='/home'>首页</NavLink>
            <NavLink to='/user？qqq=123&www=456'>用户</NavLink>
            <Switch>
                {/*exact它是精确匹配的意思，只有当前路径与path的值完全相等时才行*/}
                {/*若当前页面的路径是/home，那么会把上边的这一行替换成对应的Home组件*/}
                <Redirect path='/' exact to='/home'/>
                {/*<Route path='/home/:qqq' component={Home}/>*/}
                <Protect path={'/home/:qqq'} component={Home} level='3'/>
                {/*当前路径若是/,则重定向到 /home*/}
                <Route path='/user' component={User}/>
                <Route path='/' component={Temp}/>
                <Route path='/*'>404</Route>
                {/*<Route path='/User' component={User}/>*/}
                {/*<span><Route path='/User' component={User}/></span>*/}
                {/*<i><Route path='/User' component={User}/></i>*/}
            </Switch>
        </div>
    }
}

ReactDOM.render(<HashRouter>
    <App/>
</HashRouter>, document.getElementById('root'))
// ReactDOM.render(<BrowserRouter>
//     <App/>
// </BrowserRouter>, document.getElementById('root'))