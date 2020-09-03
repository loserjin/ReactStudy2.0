import React from "react";
import DialogC from "./components/dialog";

class Dialog extends React.Component {
    constructor() {
        super();
    }

    state = {
        flag: false
    }

    showFn() {
        this.setState({
            flag: true
        })
    }

    close = (params) => {
        this.setState({
            flag: params
        })
    }
    ok = () => {
        console.log('ok')
    }
    no = () => {
        console.log('no')
    }

    render() {
        let {flag} = this.state
        return <div className=''>
            <button onClick={this.showFn.bind(this)}>展示弹框</button>
            {flag ? <DialogC onClose={this.close} onSure={this.ok} onCancel={this.no}>
                <header slot='header'>自己的header</header>
                <p>aaaaa</p>
                <p>aaaaa</p>
                <p>aaaaa</p>
                <p>aaaaa</p>
                <footer slot="footer">自己的footer</footer>
            </DialogC> : null}
        </div>
    }
}

export default Dialog;
