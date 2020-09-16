import React, {Component} from 'react';
import {Route, Redirect} from "react-router-dom";

function fn(bol, props, Comp) {
    return !bol ? <Comp {...props}/> : <Redirect to="/>login"/>
}

class Protect extends Component {
    render() {
        let bol = localStorage.getItem('xxx');
        let {component: Comp, level, ...others} = this.props;
        console.log(others, Comp)
        let userLevel = 4;
        return (
            <>
                {/*{bol?<Comp/>:<Redirect to='/login'/>}*/}
                {/*{bol && level <= 4 ? <Route component={Comp} path={this.props.path}/> : <Redirect to='/login'/>}*/}
                <Route {...others} render={(props) => {
                    return fn(bol, props, Comp)
                }}/>
            </>
        );
    }
}

export default Protect;