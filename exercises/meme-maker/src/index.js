import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

//import containers/components
import FormContainer from "./containers/form-container.js";
import MemeContainer from "./containers/meme-container.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

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
    <div className="wrapper">
        <div className="container-fluid">
                <Header/>
                <div className="bottom">
                <div className="row">
                <FormContainer />
                <MemeContainer />
                </div>
                </div>
    </div>
           <Footer />
           </div>
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));