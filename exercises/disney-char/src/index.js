import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import FormContainer from "./containers/form-container.js";
import CharContainer from "./containers/char-container.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

class App extends React.Component {
    render() {
        return (
       <div>
           <div className="wrapper">     
                <Header />
                    <div className= "container"> 
                        <div className="row text-center subhead">
                            Enter the Info for your favorite Disney Character
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
            </div>
            <Footer />
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));