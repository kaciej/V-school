import React, { Component } from 'react';
import Color from "../components/color.js";

//get 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux"

//get all the actions and put them in a objuect called actionCreators
import * as actionCreators from "../actions/";

class ColorContainer extends Component {
  
    render() {
        return (
            <div>
                <Color changeColor={this.props.loadInfo} oldColor={this.props.color} name={this.props.name}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);

