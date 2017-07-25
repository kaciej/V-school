import React from 'react';

class ToDo extends React.Component {
    render() {
        return (
            <div className="row output-row">

               <button onClick={() => {this.props.handleRemove(this.props.item._id)}} 
                    className="remove-btn btn btn-danger">X</button>

                <button style={{display:this.props.updateInput.edit ? "inherit": "none"}}
                    onClick={() => {this.props.handleUpdate(this.props.item._id, this.props.updateInput);
                    this.props.toggleEdit()}}
                    >Save</button>

                <button onClick={() => {this.props.toggleEdit()}}>Edit</button>

                <div style={{display:this.props.updateInput.edit ? "none": "inherit"}}
                    >Title: {this.props.item.title}</div>

                <input style={{display:this.props.updateInput.edit ? "inherit": "none"}}
                    value={this.props.getUpdateValue("title")}
                    onChange={(event) => {this.props.handleChange("title", event)}} />

                <div style={{display:this.props.updateInput.edit ? "none": "inherit"}}
                     >Description: {this.props.item.description}</div>

                <input style={{display:this.props.updateInput.edit ? "inherit": "none"}} 
                    value={this.props.getUpdateValue("description")}
                    onChange={(event) => {this.props.handleChange("description", event)}} />

                <div style={{display:this.props.updateInput.edit ? "none": "inherit"}}
                    >Price: {this.props.item.price}</div>

                <input style={{display:this.props.updateInput.edit ? "inherit": "none"}}
                    value={this.props.getUpdateValue("price")}
                    onChange={(event) => {this.props.handleChange("price", event)}} />
                
            </div>
        );
    }
}

export default ToDo;