import React from 'react';
import Name from "../components/name.js";
import autoBind from "react-autobind";

class NameContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            firstname: "",
            lastname: "",
            input: {
                firstname: "",
                lastname: ""
            } 
        };
        autoBind(this);
    }
    handleInput(key, event){
        let input = {
            ...this.state.input,
        };
        input[key] = event.target.value;
        this.setState({
            ...this.state,
            input: input
        })
    }
    handleSubmit(){
       this.setState({
           ...this.state,
           firstname: this.state.input.firstname,
           lastname: this.state.input.lastname,
           input: {
               firstname: "",
               lastname: ""
           }
       }) 
    }
    render() {
        return (
            <div>
                <Name handleSubmit={this.handleSubmit}
                 handleInput={this.handleInput}
                  input={this.state.input} 
                  firstname={this.state.firstname} 
                  lastname={this.state.lastname} />
            </div>
        );
    }
}

export default NameContainer;