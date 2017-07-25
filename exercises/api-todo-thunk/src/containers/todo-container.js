import React, { Component } from 'react';
import ToDo from "../components/todo.js";
import autoBind from "react-autobind";

class ToDoContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            ...this.props.item,
            edit: false
        }
        autoBind(this);
    }
handleChange(key, event){
    this.setState({
        ...this.state,
        [key]: event.target.value
    })
}
getUpdateValue(key) {
    return this.state[key]
}
toggleEdit(){
    this.setState({
        edit: !this.state.edit
    });
}
    render() {
        return (
            <div>
                <ToDo toggleEdit={this.toggleEdit}
                handleUpdate={this.props.handleUpdate}
                getUpdateValue={this.getUpdateValue}
                updateInput={this.state} 
                handleRemove={this.props.handleRemove} 
                item={this.props.item} 
                handleChange={this.handleChange}/>
            </div>
        );
    }
}


export default ToDoContainer;