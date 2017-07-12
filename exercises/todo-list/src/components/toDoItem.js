import React from "react";
import FontAwesome from "react-fontawesome";
import InlineEdit from 'react-edit-inline';

import ToDoList from "./toDoList.js";

class ToDoItem extends React.Component{
    render(){
        return(
            <div className="item">
              <button className="didButton" onClick={() => {this.props.handleDidClick(this.props.index)}} >DID IT</button>
                <span className="list-text">{this.props.list}</span>
                <input className="editbox" onChange={(event) => {
                    this.props.handleUpdate(this.props.index, event)
                }} value={this.props.nameValue}/>
                <button className="save" onClick={() => {
                    this.props.handleSave(this.props.index)
                    }} >Save</button>
                </div>
        )
    }
}

export default ToDoItem;