import React from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class MrNorris extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                <button className="btn-danger " onClick={() => {this.props.jokeGen()}}>"CHUCK" IT</button>
                </div>
                <h1 className="col-md-8">{this.props.joke}</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MrNorris);
