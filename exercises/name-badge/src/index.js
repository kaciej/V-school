import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import BadgeContainer from "./containers/badge-container.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BadgeContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));



