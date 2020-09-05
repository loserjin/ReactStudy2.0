import React from "react";

class Button extends React.Component {

    render() {
        let {onClick} = this.props
        return <>
            <button onClick={onClick}>{this.props.children}</button>
        </>
    }
}

export default Button;