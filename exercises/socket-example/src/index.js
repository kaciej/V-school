import React, { Component } from 'react';
import ReactDOM from "react-dom";
import FormContainer from "./form/form-container.js";
import ChatContainer from "./chat/chat-container.js";

class App extends Component {
    render() {
        return (
            <div>
                <FormContainer />
                <ChatContainer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));