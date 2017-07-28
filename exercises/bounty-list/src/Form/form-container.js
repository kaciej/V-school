import React, { Component } from 'react';
import autoBind from "react-autobind";

import Form from "./form.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            location: "",
            price: "",
            wantedAlive: ""
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
                <Form  
                handleSubmit={this.props.addData}
                handleChange={this.handleChange} 
                input={this.state} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);