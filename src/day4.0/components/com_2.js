import React from "react";
import store from '../store/index';
import {connect} from 'react-redux';

class Com2 extends React.Component {
    render() {
        return <div>
            <h1>组件中的数字是：{store.getState().count}</h1>
        </div>
    }
}

Com2 = connect((state) => {
    return {
        qqq: state.count
    }
})(Com2)
export default Com2;