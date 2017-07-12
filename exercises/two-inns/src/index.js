import React from 'react';
import ReactDOM from "react-dom";
import "./index.css"
import NameContainer from "./containers/name-container.js";
import Header from "./components/header.js";



class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NameContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));