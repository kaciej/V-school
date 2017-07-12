import React from 'react';
import Counter from "../components/counter.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

class CountContainer extends React.Component {
    render() {
        return (
            <div>
                <Counter handleAdd={this.props.makeAddAction}
                handleSub={this.props.makeSubAction} 
                counter={this.props.counter}/>
            </div>
        );
    }
}


//handles putting state into react
const mapStateToProps = (state) => {
    return state;
}

//handles putting actionCreators into react
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountContainer);