import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
            <div className="row text-center form-group">
                <input onKeyPress={this.props.keyPress} className="col-md-2" onChange={(event) => {this.props.handleChange("name", event)}}
                 value={this.props.input.name}
                 placeholder="Name" />
                <input onKeyPress={this.props.keyPress} className="col-md-2" onChange={(event) => {this.props.handleChange("cost", event)}}
                 value={this.props.input.cost}
                 placeholder="Cost" />
                <input onKeyPress={this.props.keyPress} className="col-md-2" onChange={(event) => {this.props.handleChange("activity", event)}}
                 value={this.props.input.activity}
                 placeholder="What do you want to do there?"/>
                 <input onKeyPress={this.props.keyPress} className="col-md-2" onChange={(event) => {this.props.handleChange("img", event)}}
                 value={this.props.input.img}
                 placeholder="Add an Image (url)"/>
            </div>
            <div className="row text-center">
                <button className="add-btn text-center"
                 onClick={() => {this.props.handleAdd(this.props.input),
                 this.props.clearInputs()}}>Add it to the list</button>
            </div>
            </div>
        );
    }
}

export default Form;