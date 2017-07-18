import React from 'react';
import BadgeList from "../components/badge-list.js"
import Form from "../components/form.js";
import autoBind from "react-autobind";

class BadgeContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            badges: [],
            inputValue: {}
        }
        autoBind(this);
    }
    handleChange(key, event){
        let inputValue = {
            ...this.state.inputValue
        }
        inputValue[key] = event.target.value;
        this.setState({
            ...this.state,
            inputValue: inputValue
        })
    }
    handleSubmit(){
        let newBadge={...this.state.inputValue}
        this.setState({
            ...this.state,
            badges: [...this.state.badges, newBadge],
            inputValue: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                favFood: "",
                placeOfBirth: "",
                tellUsMore: ""
            }
        })
    }
    render() {
        return (
            <div>
                <Form inputValue={this.state.inputValue} 
                handleChange= {this.handleChange} 
                handleSubmit={this.handleSubmit}/>
                <BadgeList badges={this.state.badges}/>
            </div>
        );
    }
}

export default BadgeContainer;