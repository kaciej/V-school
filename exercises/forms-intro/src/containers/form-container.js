import React from "react";
import Form from "../components/form.js";
import autoBind from "react-autobind";


class FormContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            names: [],
            nameValue: "",
        }
        autoBind(this);
    }
    input(event){
        this.setState({
            ...this.state,
            nameValue: event.target.value
        });
    }

    clicked(){
        this.setState({
            ...this.states,
            names: [...this.state.names, this.state.nameValue],
            nameValue: "",
        });
    }
    remove(index){
        let oldNames = [...this.state.names];
        oldNames.splice(index, 1);
        this.setState({
            ...this.state,
            names: oldNames
        })
    }
    render(){
        return (
            <div className="container">
                <div className="row">
            <Form handleRemove={this.remove} brand="If you would like to continue to drink clean water enter  YOUR NAME" names={this.state.names} handleClicked={this.clicked} handleInput={this.input} nameValue={this.state.nameValue} />
               </div>
            </div>
        )
    }
}

export default FormContainer;