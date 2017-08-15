import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="text-center">
                <input value={this.props.input.username} 
                    onChange={(event) => {this.props.handleChange("username", event)}}
                    className="form-control" placeholder="Username"/>
                <textarea value={this.props.input.message}
                onChange={(event) => {this.props.handleChange("message", event)}} 
                cols="30" rows="10" className="form-control" placeholder="Message"></textarea>
                <button className="btn btn-danger">Send</button>
            </div>
        );
    }
}

export default Form;