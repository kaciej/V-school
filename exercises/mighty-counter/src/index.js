import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import CounterContainer from "./container/count-container"

class App extends React.Component{
    render(){
        return(
            <div>
                <h1 className="text-center">Click If You Dare</h1>
                <CounterContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));