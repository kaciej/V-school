import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MapContainer from "./map/map-container.js";
import FormContainer from "./form/form-container.js";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center">MAP IT</h1>
                <FormContainer />
                <MapContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));