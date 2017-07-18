import React from 'react';
import Meme from "../components/meme.js";

//get 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get all the actions and put them in a objuect called actionCreators
import * as actionCreators from "../actions/";

class MemeContainer extends React.Component {
    render() {
        return (
            <div>
                <Meme top={this.props.top} bottom={this.props.bottom} url={this.props.url} />
            </div>
        );
    }
}

    //tell redux how to connext the state to component via props || map data from store to props
    const mapStateToProps = (state) => {
        return state
    }
    //tell it how to turn actions into functions that can be called in react via props
    const mapDispatchToProps = (dispatch) => {
        return bindActionCreators(actionCreators, dispatch);
    }

//connect store to the MemeContainer
export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);