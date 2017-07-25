import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import FormContainer from "./containers/form-container.js";
import CharContainer from "./containers/char-container.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

//get the thing that provides store to you app
import { Provider } from "react-redux";

//get the thing that makes the store
import { createStore } from "redux";

//get the reduce to handle state
import reducers from "./reducers";

const store = createStore(reducers);

class App extends React.Component {
    render() {
        return (
       <div>
               
                <Header />
                    <div className= "container"> 
                        <div className="row text-center subhead">
                            Enter the Info of your favorite Disney Character
                        </div>
                        <div className="row">
                    <div className="col-md-6">
                        <FormContainer />
                    </div>
                    <div className="col-md-6">
                        <CharContainer />
                    </div>    
                    </div>
                </div>
            
            {/*<Footer />*/}
        </div>
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));