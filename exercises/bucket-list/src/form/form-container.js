import React, { Component } from 'react';
import Form from "./form.js";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            cost: "",
            img: "",
            activity: ""
        }
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }
    keyPress(event) {
        if(event.key === "Enter"){
            this.props.addData(this.state)
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            name: "",
            cost: "",
            img: "",
            activity: ""
        })
    }
    render() {
        return (
            <div>
                <Form clearInputs = {this.clearInputs}
                 keyPress={this.keyPress}
                 handleChange={this.handleChange}
                 input={this.state}
                 handleAdd={this.props.addData}/>
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
