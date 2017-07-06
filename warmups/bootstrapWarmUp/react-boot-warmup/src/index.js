import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import components
import Navbar from "./navbar.js";
import Header from "./header.js"

class App extends React.Component{
    render() {
        return (
        <div>
            <Navbar />
        <Header />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
