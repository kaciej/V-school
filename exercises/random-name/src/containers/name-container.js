import React from 'react';
import Name from "../components/name.js";


//get 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux"

//get all the actions and puthem in a objuect called actionCreators
import * as actionCreators from "../actions/index.js";

class NameContainer extends React.Component {
    render() {
        return (
            <div>
                <Name randomName={this.props.randomName}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NameContainer);

