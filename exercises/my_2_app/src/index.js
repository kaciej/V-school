import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import components
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="Catbabies" links={[
          {
            text: "heres",
            link: "http://google.com"
          }, {
            text: "theres",
            link: "http://yahoo.com"
          }, {
            text: "everywheres",
            link: "http://atom.io"
          }
        ]}/>
      <Content>
        <h1 className="title">React here I come</h1>
        <p>Damn that color is bright what kind of galactic lawn</p>
      </Content>

        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector("#root"))
