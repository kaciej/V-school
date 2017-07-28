import React, { Component } from 'react';
import Hit from "./hit.js";
import autoBind from "react-autobind";

// Each indeividual hit components and handle local state for inputs
class HitContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.hit,
            edit: false
        }
        autoBind(this);
    }
    handleChange(key, event){
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
                <Hit handleUpdateValue={this.handleUpdateValue} 
                 toggleEdit={this.toggleEdit}
                 input={this.state}
                 handleChange={this.handleChange}
                 hit={this.props.hit} 
                 handleRemove={this.props.handleRemove}
                 handleSave={this.props.handleSave}/>
            </div>
        );
    }
}

export default HitContainer;