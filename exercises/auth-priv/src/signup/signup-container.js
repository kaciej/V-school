import React, { Component } from 'react';
import autoBind from "react-autobind";
import Signup from "./signup.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";

class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }
    handleSubmit(username, password) {
        this.props.signup(username, password);
        this.props.toggleModal("isShowingSignup");
        this.setState({
            username: "",
            password: ""
        })
    }
    render() {
        return (
            <div>
                <Signup input={this.state} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(SignupContainer);