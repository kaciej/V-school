import React, { Component } from 'react';
import HitList from "./hitlist.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class HitListContainer extends Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <HitList handleSave={this.props.updateData}
                 hits={this.props.hits}
                 handleRemove={this.props.deleteData} />
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

export default connect(mapStateToProps, mapDispatchToProps)(HitListContainer);