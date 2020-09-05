import React from "react";

class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.qqq === nextProps.children) {
            return false;
        } else {
            this.qqq = nextState.children;
            return true;
        }

    }

    render() {
        let {onClick} = this.props
        return <>
            <button onClick={onClick}>{this.props.children}</button>
        </>
    }
}

export default Button;