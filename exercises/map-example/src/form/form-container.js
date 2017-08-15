import React, { Component } from 'react';
import Form from "./form.js";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class FormContainer extends Component {
    constructor() {
        super();
        this.state= {
            lat: "",
            lng: "",
            address: "",
            label: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    handleClick(data){
        console.log(data);
        if(data.address === "") {
            this.props.addMarker(data);
        } else {
            console.log("called");
            this.props.getLatAndLng(data.label, data.address)
        }
        this.setState({
            lat: "",
            lng: "",
            address: "",
            label: ""
        })
    }
    render() {
        return (
            <div>
                <Form input={this.state} 
                    handleChange={this.handleChange}
                    handleClick = {this.handleClick}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(FormContainer);