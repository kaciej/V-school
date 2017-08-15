import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.handleSubmit(this.props.input.username, this.props.input.password)}}>
                <input onChange={(event) => {this.props.handleChange("username", event)}} 
                    value={this.props.input.username} 
                    type="text" placeholder="Username"/>
                <input onChange={(event) => {this.props.handleChange("password", event)}}
                    value={this.props.input.password} 
                    type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;