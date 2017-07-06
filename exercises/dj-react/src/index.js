import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DjContainer from "./containers/dj-container.js";


class App extends React.Component {
    render(){
        return (
            <div className="container">
            <DjContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));