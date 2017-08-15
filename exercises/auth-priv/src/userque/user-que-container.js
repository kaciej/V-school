import React, { Component } from 'react';
import autoBind from "react-autobind";

import UserQue from "./user-que.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions";

class UserQueContainer extends Component {
    constructor() {
        super();
        this.state = {
            didReq: false
        }
    }
    componentDidUpdate() {
        if(this.props.userQue.length <= 0 && this.props.priv === "admin" && !this.state.didReq) {
            this.props.loadUserQue(this.props.token);
            this.setState({
                didReq: !this.state.didReq
            });
        }
    }
    render() {
        return (
            <div style={{display: this.props.priv === "admin" ? "inherit": "none"}}>
                <UserQue handleAdd={this.props.addUser} users={this.props.userQue} priv={this.props.priv} token={this.props.token} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(UserQueContainer);