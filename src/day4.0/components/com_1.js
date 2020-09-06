import React from "react";
import store from '../store/index';
class Com1 extends React.Component{
    render() {
        return <div>
            <h1>组件中的数字是：{store.getState().count}</h1>
        </div>
    }
}
export default Com1;