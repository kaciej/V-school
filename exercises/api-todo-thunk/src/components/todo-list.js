import React, { Component } from 'react';
import ToDoContainer from "../containers/todo-container.js"

class ToDoList extends Component {
    genItems() {
        return this.props.items.map((item, index) => {
            return <ToDoContainer handleRemove={this.props.handleRemove} 
            key={item.title + index} 
            item={item}
            handleUpdate={this.props.handleUpdate} />
        })
    }
    render() {
        return (
            <div>
               {this.genItems()}
            </div>
        );
    }
}

export default ToDoList;