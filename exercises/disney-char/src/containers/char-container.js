import React from 'react';
import CharList from "../components/charList.js";
import autoBind from "react-autobind";

//get 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux"

//get all the actions and put them in a objuect called actionCreators
import * as actionCreators from "../actions/";

class CharContainer extends React.Component {
    
    render() {
        return (
            <div>
                <CharList chars={this.props.chars} 
                remove={this.props.remove}
                handleSave={this.props.update}
                handleInput={this.handleInput}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CharContainer);