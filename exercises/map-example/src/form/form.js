import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <input value={this.props.input.label}
                        onChange={(event) => {this.props.handleChange("label", event)}} 
                        className="form-control" placeholder="Label"/>
                    <input type="Number" value={this.props.input.lat}
                        onChange={(event) => {this.props.handleChange("lat", event)}} 
                        className="form-control" placeholder="Lat"/>
                    <input type="Number" value={this.props.input.lng} 
                        onChange={(event) => {this.props.handleChange("lng", event)}} 
                        className="form-control" placeholder="Lng"/>
                    <input type="text" value={this.props.input.address} 
                        onChange={(event) => {this.props.handleChange("address", event)}} 
                        className="form-control" placeholder="Address"/>
                    <button onClick={() => {this.props.handleClick(this.props.input)}}
                        className="btn btn-success">Submit</button>
                </div>
            </div>
        );
    }
}

export default Form;