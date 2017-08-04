import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Form extends Component {
    render() {
        return (
            <div className="form">
                <h1 className="form-header">Share your creative ideas for unschooling...</h1>
                <input className="form-inputs form-control" type="text" placeholder="Title"
                    value={this.props.input.title}
                    onChange={(event) => {this.props.handleChange("title", event)}}/>
                <textarea rows="16" className="form-inputs form-control form-desc" type="text" placeholder="Description" 
                    value={this.props.input.description}
                    onChange={(event) => {this.props.handleChange("description", event)}}/>
                <input className="form-inputs form-control" type="text" placeholder="Image (url)" 
                    value={this.props.input.img}
                    onChange={(event) => {this.props.handleChange("img", event)}}/>
                <div className="text-center">
                    <Link to="/"><button onClick={() => {this.props.handleAdd(this.props.input)}}
                    className="form-btn btn btn-success">Post It</button>
                </Link>
                </div>
                
            </div>
        );
    }
};

export default Form;