import React, { Component } from 'react';

class Bucket extends Component {
    render() {
        return (
            <div className="col-md-6">
                <div style={{display:this.props.input.edit ? "none": "inherit"}} className="item">
                    <div className="bucket-img"
                     style={{backgroundImage: `url('${this.props.place.img}')`}}>
                    </div>
                    <p>{this.props.place.name}</p>
                    <p>Distance: {this.props.place.cost}</p>
                    <p>{this.props.place.activity}</p>
                </div>

                <div style={{display:this.props.input.edit ? "inherit": "none"}}
                 className="edit-inputs">
                    <input value={this.props.input.name}
                     onChange={(event) => {this.props.handleChange("name" ,event)}}/>
                    <input value={this.props.input.cost}
                     onChange={(event) => {this.props.handleChange("cost" ,event)}}/>
                    <input value={this.props.input.activity}
                     onChange={(event) => {this.props.handleChange("activity", event)}}/>
                    <input value={this.props.input.img}
                     onChange={(event) => {this.props.handleChange("img", event)}}/>
                </div>

                <button style={{display:this.props.input.edit ? "inherit": "none"}}
                     className="bucket-btns btn btn-success"
                     onClick={() => {this.props.handleSave(this.props.input.id, this.props.input)
                     this.props.toggleEdit();}}>Save</button>

                <button style={{display:this.props.input.edit ? "none": "inherit"}}
                    className=" bucket-btns btn btn-primary"
                    onClick={() => {this.props.toggleEdit()}}>Edit</button>

                <button className="bucket-btns btn btn-danger"
                 onClick={() => {this.props.handleRemove(this.props.place.id)}}>X</button>  
            </div>
        );
    }
}

export default Bucket;