import React from 'react';
import Map from "./map.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/";

class MapContainer extends React.Component {
    componentWillMount() {
        this.props.loadMarkers();
    }
    render() {
        return (
            <div>
                <Map lat={this.props.lat}
                    lng={this.props.lng}
                    handleSet={this.props.setCurrent}
                    selected={this.props.selected}
                    handleAdd={this.props.addMarker}
                    handleDelete={this.props.deleteMarker} 
                    markers={this.props.markers} 
                    containerElement={<div style={{height: "600px", width: "100%"}}></div>}
                    mapElement={<div style={{height: "600px", width: "100%"}}></div>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(MapContainer);

