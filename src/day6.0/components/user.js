import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom';

class User extends React.Component {
    render() {
        return (
            <div>
                <h1>用户</h1>
                <NavLink to='/user/money'>钱包</NavLink>
                <NavLink to='/user/quan'>优惠券</NavLink>
                <Redirect path='/user' to='/user/money'/>
                <Route path='/user/money' render={() => <h2>钱包</h2>}/>
                <Route path='/user/quan' render={() => <h2>优惠券</h2>}/>
            </div>
        );
    }
}

export default User;