import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="row form-row">
                <div className="col-md-4 col-xs-12">
                <input value={this.props.input.title} 
                onChange={(event) => {this.props.handleChange("title", event)}} 
                className="title" placeholder="Title"/>
                </div>
                <div className="col-md-4 col-xs-12">
                <input value={this.props.input.desc} 
                onChange={(event) => {this.props.handleChange("description", event)}}
                className="description" placeholder="Description"/>
                </div>
                <div className="col-md-2 col-xs-12">
                <input value={this.props.input.price}
                onChange = {(event) => {this.props.handleChange("price", event)}}
                className="Price" placeholder="Price?"
                type= "number"/>
                </div>
                <div className="col-md-2 col-xs-12">
                <button onClick={() => {this.props.handleAdd(this.props.input);}} 
                className="add-btn">ADD IT</button>
                </div>
                </div>
        );
    }
}

export default Form;