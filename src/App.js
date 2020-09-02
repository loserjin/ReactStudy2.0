import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        //会执行两次
        console.log(666)
        return <div>
            ss
        </div>
    }
}

export default App
