import React, { Component } from 'react';
import autoBind from "react-autobind";

import Form from "../components/form.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class FormContainer extends Component {
    constructor(){
        super()
            this.state = {
                    title: "",
                    price: 0,
                    description: ""
            }
            autoBind(this)
    }
handleChange(key, event){
    this.setState({
        ...this.state,
        [key]: event.target.value
    })
}
    render() {
        return (
            <div>
                <Form handleAdd={this.props.addData} 
                input={this.state} 
                handleChange={this.handleChange} />
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
