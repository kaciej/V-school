import React, { Component } from 'react';
import autoBind from "react-autobind";
import Login from "./login.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";

class LoginContainer extends Component {
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
        this.props.login(username, password);
        this.props.toggleModal("isShowingLogin");
        this.setState({
            username: "",
            password: ""
        });
    }
    render() {
        return (
            <div>
                <Login input={this.state} 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(LoginContainer);
