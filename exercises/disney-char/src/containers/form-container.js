import React from 'react';
import Form from "../components/form.js";
import autoBind from "react-autobind";

class FormContainer extends React.Component {
    constructor(){
        super()
        this.state={
            title: "",
            url: "",
            desc: ""
        }
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Form handleChange={this.handleChange}
                info={this.state} />
            </div>
        );
    }
}

export default FormContainer;