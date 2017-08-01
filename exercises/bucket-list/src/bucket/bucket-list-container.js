import React, { Component } from 'react';
import BucketList from "./bucket-list.js";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/";

class BucketListContainer extends Component {
     componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <BucketList 
                 places={this.props.item}
                 removeData={this.props.deleteData}
                 handleUpdate={this.props.updateData}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BucketListContainer);