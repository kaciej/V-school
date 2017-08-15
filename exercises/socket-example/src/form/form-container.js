import React, { Component } from 'react';
import Form from "./form.js";
import autoBind from "react-autobind";

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            message: ""
        }
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <Form input={this.state} handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default FormContainer;