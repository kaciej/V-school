import React, { Component } from 'react';
import BucketContainer from "./bucket-container.js";

class BucketList extends Component {
    genPlaces() {
        return this.props.places.map((item, index) => {
            return <BucketContainer
             key={index + item.name} 
             place={item} 
             removeData={this.props.removeData}
             handleSave={this.props.handleUpdate} />
        })
    }
    render() {
        return (
            <div>
                {this.genPlaces()}
            </div>
        );
    }
}

export default BucketList;