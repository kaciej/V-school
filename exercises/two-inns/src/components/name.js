import React from 'react';


class Name extends React.Component {
    render() {
        return (
            <div>
                <h3>Input Your Name</h3>
                <button onClick={() => {this.props.handleSubmit()}} >Submit</button>
                <input onChange={(event) => {this.props.handleInput("firstname", event);
                }} value={this.props.input.firstname} placeholder="Firstname"/>
                <input onChange={(event) => {this.props.handleInput("lastname", event);
                }} value={this.props.input.lastname} placeholder="Lastname"/>
                <h1>{this.props.firstname}</h1>
                <h1>{this.props.lastname}</h1>
            </div>
        );
    }
}

export default Name;

