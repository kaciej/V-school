import React from 'react';
import Form from "../components/form.js";
import autoBind from "react-autobind";

//get 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux"

//get all the actions and put them in a objuect called actionCreators
import * as actionCreators from "../actions/";


class FormContainer extends React.Component {
    constructor(){
        super()
        this.state={
            title: "",
            url: "",
            desc: ""
        }
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }
    clearInputs(){
        for(let key in this.state){
            this.setState({
                [key]: ""
            });
        }
    }
    render() {
        return (
            <div>
                <Form clearInputs={this.clearInputs}
                handleChange={this.handleChange}
                handleClick={this.props.makeChar}
                info={this.state} />
            </div>
        );
    }
}

//tell redux how to connext the state to component via props
const mapStateToProps = (state) => {
        return state
}
//tell it how to turn actions into functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
