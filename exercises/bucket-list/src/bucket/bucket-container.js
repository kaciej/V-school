import React, { Component } from 'react';
import Bucket from "./bucket";
import autoBind from "react-autobind";

class BucketContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.place,
            edit: false
        }
        autoBind(this);
    }
    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        }) 
    }
     toggleEdit(){
        this.setState({
            edit: !this.state.edit
        })
    }
    render() {
        return (
            <div>
                <Bucket input={this.state}
                 toggleEdit={this.toggleEdit}
                 handleChange={this.handleChange}
                 place={this.props.place} 
                 handleRemove={this.props.removeData} 
                 handleSave={this.props.handleSave} />
            </div>
        );
    }
}

export default BucketContainer;