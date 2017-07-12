import React from "react";
import ToDoList from "../components/toDoList.js";
import autoBind from "react-autobind";
import InlineEdit from 'react-edit-inline';

class ToDoContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            inputValue: ""
        }
        autoBind(this);
    }
    input(event) {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        });
    }
    doClick() {
        this.setState({
            ...this.state,
            list: [
                ...this.state.list,
                {name: this.state.inputValue, value: this.state.inputValue}
            ],
            inputValue: ""
        })
    }
    didClick(index) {
        let oldList = [...this.state.list];
        oldList.splice(index, 1);
        this.setState({
            ...this.state,
            list: oldList
        })
    }
    updateItemValue(index, event){
       let list = [...this.state.list]
       list[index].value = event.target.value;
       this.setState({
           ...this.state,
           list: list
       })
    }
    save(index){
        let list = [...this.state.list];
        list[index].name = list[index].value;
        list[index].value = "";
        this.setState({
            ...this.state,
            list: list
        })
    }
    keyPress(event) {
        if(event.key === "Enter"){
            this.doClick();
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <input className="addlist" onKeyPress={this.keyPress} onChange={(event)=> {
                            this.input(event)}} value={this.state.inputValue}/>
                        <button
                            className="doButton"
                            onClick={() => {this.doClick()}}>DO IT</button>
                            <h3 className="text-center">My Goals</h3>
                    </div>
                    
                </div>
                <ToDoList
                    handleDidClick = {this.didClick}
                    list = {this.state.list}
                    handleUpdate = {this.updateItemValue}
                    handleSave = {this.save}/>
            </div>
        )
    }
}

export default ToDoContainer;