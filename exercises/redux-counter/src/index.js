import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/";

//import components
import CountContainer from "./containers/count-container.js";
import Header from "./header.js";

//create store
const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <CountContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));