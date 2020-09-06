import React, {Component} from 'react';

class Input extends Component {
    keyDown = (e) => {
        if (e.keyCode === 13) {
            this.props.onSubmit();
        }
    }

    render() {
        let {value, onChange} = this.props;
        return (
            <div>
                <input type="text" value={value} onChange={onChange} onKeyDown={this.keyDown}/>
            </div>
        );
    }
}
export default Input;
