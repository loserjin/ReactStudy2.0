import React from 'react';
//动态组件
let Temp1 = ()=> <h2>6666</h2>
let Temp2 = ()=> <h2>8888</h2>
function Component(props){
    let {is:Com} = props;
    return <Com/>
}
class Home extends React.Component {
    state = {
        str: Temp1
    }
    change(n){
        if(n==='1'){
            this.setState({
                str:Temp1
            })
        }else{
            this.setState({
                str:Temp2
            })
        }
    }
    render() {
        let {str} = this.state;
        return (
            <div>
                <h1>首页</h1>
                <button onClick={this.change.bind(this,'1')}>temp1</button>
                <button onClick={this.change.bind(this,'2')}>temp2</button>
                <Component is={str}/>
            </div>
        );
    }
}

export default Home;