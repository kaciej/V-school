import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
//import components
import ToDoContainer from "./containers/toDo-container.js";
import Header from "./components/header.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ToDoContainer/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector("#root"));