import React from "react";
import ToDoItem from "./toDoItem.js";

class ToDoList extends React.Component{
    genList(){
        return this.props.list.map((item, index) => {
            return(
                <ToDoItem handleSave={this.props.handleSave} 
                handleUpdate={this.props.handleUpdate}
                nameValue={item.value} 
                index={index}
                handleDidClick={this.props.handleDidClick} 
                key={item.name + index} 
                list={item.name}/>
            )
        })
    }
    render(){
        return(
            <div>
           {this.genList()}
           </div>
        )
    }
}

export default ToDoList;