import React from 'react';
import ReactDOM from "react-dom";

import "./index.css";
import NavbarContainer from "./containers/navbar-container.js";
import Footer from "./components/footer.js";
import ContactUsContainer from "./containers/contact-us-container.js";
import Brand from "./components/brand.js";

//get the thing that provides store to you app
import { Provider } from "react-redux";

//get the thing that makes the store
//and apply middleWare
import { createStore, applyMiddleware } from "redux";

//get thunk
import thunk from "redux-thunk";

//get the reduce to handle state
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return (
            <div>
                <NavbarContainer />
                <div className="container-fluid">
                    <Brand/>
                    <ContactUsContainer />
                </div>
                <Footer />
            </div>
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));