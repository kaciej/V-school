import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

//import containers
import FormContainer from "./containers/form-container.js";
import NameContainer from "./containers/name-container.js";
import Header from "./components/header.js";

//get the thing that provides store to you app
import { Provider } from "react-redux";

//get the thing that makes the store
import { createStore } from "redux";

//get the reduce to handle state
import reducers from "./reducers/";

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <FormContainer />
                    <NameContainer />
                </div>
            </div>
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));