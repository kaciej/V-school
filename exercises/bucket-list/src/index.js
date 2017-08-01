import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";
//imports comopnents
import FormContainer from "./form/form-container.js";
import BucketListContainer from "./bucket/bucket-list-container.js";
import Header from "./header.js";

//the thing that provides store to your app
import { Provider } from "react-redux";

//get the thing that makes the store
//and apply middleWare
import { createStore, applyMiddleware } from "redux";

//get thunk
import thunk from "redux-thunk";

//get the reduce to handle state
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <Header />
            <div className="container-fluid">
               <FormContainer />
            <div className="row">
                <BucketListContainer />
            </div>  
                
            </div>
            </div>
            
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));