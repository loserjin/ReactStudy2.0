import React from "react";
import Button from './button';

class List extends React.Component {
    del(n) {
        //可以改变但是不建议
        // console.log(n);
        // this.props.data.splice(n,1);
        // console.log(this.props.data);
        // this.setState({})
        this.props.onDel(n);

    }

    render() {
        let {data = []} = this.props
        return <ul className=''>
            {data.length ? data.map((item, index) => {
                return <li key={index}>{item}<Button onClick={this.del.bind(this, index)}>X</Button></li>
            }) : <i>暂无数据</i>}
        </ul>;
    }
}

export default List;