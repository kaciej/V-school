import React from 'react';
import Speak from "../components/speak.js";
import autoBind from "react-autobind";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class SpeakContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
        autoBind(this);
    }
    handleChange(event){
        this.setState({
            ...this.state,
            input: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Speak 
                handleClick={this.props.convertText}
                input={this.state.input}
                handleChange={this.handleChange} 
                text={this.props.text} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeakContainer);