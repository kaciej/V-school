import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import Component
import Navbar from "./navbar.js"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello</h1>
        <h2>It's Me</h2>
      <p className="adel">The Adel of your future</p>
    <div className="moppy"></div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"));
