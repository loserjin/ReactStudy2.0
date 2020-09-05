import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

class Btnm extends React.Component{
    static contextTypes = {
        title:propTypes.string
    }
    render() {
        return <button>{this.context.title}</button>
    }
}
class Show extends React.Component{
    static contextTypes = {
        theme: propTypes.string
    }
    render() {
        console.log(this);
        return <div>
            hag{this.context.theme}
        </div>;
    }
}
class App extends Component {
    //创造一个上下文，首先声明上下文中的数据类型，
    static childContextTypes = {
        theme: propTypes.string,
        title: propTypes.string
    }
    getChildContext(){
        return{
            theme: 'red',
            title: '百度'
        }
    }
    constructor() {
        super();
    }

    render() {
        return (
            <div className=''>
                <Btnm/>
                <Show>g</Show>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));