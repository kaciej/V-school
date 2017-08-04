import React, { Component } from 'react';
import Post from "./post.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";
import autoBind from "react-autobind"

class PostContainer extends Component {
    constructor() {
        super();
        this.state = {
            comment: ""
        };
        autoBind(this);
    }
    componentWillMount() {
        this.props.loadDataById(this.props.match.params.id)
    }
    handleComment(event) {
        this.setState({
            comment: event.target.value
        });
    }
    render() {
        
        return (
            <div className="container">
                <Post handleComment={this.handleComment} 
                    input={this.state}
                    currentPost={this.props.currentPost}
                    addComment={this.props.comment}
                    updateUp={this.props.updateUp}
                    updateDown={this.props.updateDown}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(PostContainer);