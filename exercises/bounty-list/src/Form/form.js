import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                <input className="form-control" 
                 onChange={(event) => {this.props.handleChange("name", event)}} 
                 value={this.props.input.name} placeholder="Name" type="text"/>
                <input className="form-control"
                 onChange={(event) => {this.props.handleChange("location", event)}}
                 value={this.props.input.location} placeholder="Location" type="text"/>
                <input className="form-control"
                 onChange={(event) => {this.props.handleChange("price", event)}}
                 value={this.props.input.price} placeholder="Price" type="text"/>
                <input className="form-control"
                 onChange={(event) => {this.props.handleChange("wantedAlive", event)}}
                 value={this.props.input.wantedAlive} placeholder="Wanted Alive" type="text"/>
                <button className="btn btn-warning" onClick={() => {this.props.handleSubmit(this.props.input)}}>Submit</button>
                </div>
            </div>
        );
    }
}

export default Form;