import React, { Component } from 'react';

//Render out the hit
class Hit extends Component {
    render() {
        return (
            <div className="hit-list">
                <div style={{display:this.props.input.edit ? "none": "inherit"}}>
                    <p>{this.props.hit.name}</p>
                    <p>{this.props.hit.location}</p>
                    <p>{this.props.hit.price}</p>
                    <p>{this.props.hit.wantedAlive}</p>
                </div>
                
                <div style={{display:this.props.input.edit ? "inherit": "none"}}>
                    <input value={this.props.input.name}
                        onChange={(event) => {this.props.handleChange("name", event)}}/>
                    <input value={this.props.input.location}
                        onChange={(event) => {this.props.handleChange("location", event)}}/>
                    <input value={this.props.input.price}
                        onChange={(event) => {this.props.handleChange("price", event)}}/>
                    <input value={this.props.input.wantedAlive}
                        onChange={(event) => {this.props.handleChange("wantedAlive", event)}}/>
                </div>
                

                <button style={{display:this.props.input.edit ? "none": "inherit"}}
                    className="btn btn-primary"
                    onClick={() => {this.props.toggleEdit()}}>Edit</button>

                <button style={{display:this.props.input.edit ? "inherit": "none"}}
                    onClick={() => {this.props.handleSave(this.props.hit.id, this.props.input)
                    this.props.toggleEdit();}}
                 className="btn btn-success">Save</button>

                <button className="btn btn-danger"
                    onClick={() => {this.props.handleRemove(this.props.hit.id)}}>X</button>
            </div>
        );
    }
}

export default Hit;