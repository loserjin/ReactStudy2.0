import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state({
    //         count: 100
    //     })
    // }
    state = {
        count: 100
    }

    add(e) {
        console.log('+');
        console.log(e, e.nativeEvent, e.targets)
        // setState 更新数据大部分是一个异步操作，等全部数据更改完后再渲染
        //在原生数据事件绑定中或定时器中，它是一个同步的
        // this.setState({
        //     count: this.state.count+1
        // },function (){
        //     //数据更新完成之后触发
        //     console.log(this.state.count)
        // })
        this.setState({
            count: this.state.count + 1
        })
        console.log(this);
    }

    minus(e) {
        console.log('-');
        console.log(e)
        this.setState({
            count: this.state.count - 1
        })
    }

    over() {
        console.log('over');
    }

    minus2 = () => {
        console.log(this);
    }

    componentDidMount() {
        //同步的
        document.getElementById('qqq').onclick = () => {
            this.setState({
                name: 666
            })
        }
    }

    render() {
        // console.log(this.state);u
        let {count} = this.state;
        return <div>
            {/*on+事件名，事件名遵循驼峰命名 合成事件*/}
            <button onClick={this.add.bind(this)}>+</button>
            <button onClick={(e) => {
                this.minus(e)
            }}>-
            </button>
            <button onClick={this.minus2}>--</button>
            <h1 onMouseOver={this.over}>{count}</h1>

        </div>;

    }
}

ReactDOM.render(<>
    <App/>
</>, document.getElementById("root"));