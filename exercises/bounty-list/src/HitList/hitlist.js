import React, { Component } from 'react';
import HitContainer from "./hit-container.js";

//mapping data from redux for each item in the array
class HitList extends Component {
    genHits() {
        return this.props.hits.map((item, index) => {
            return <HitContainer key={index + item.name} 
                        hit={item} handleRemove={this.props.handleRemove} 
                        handleSave={this.props.handleSave}/>
        })
    }
    render() {
        return (
            <div>
               {this.genHits()}
            </div>
        );
    }
}

export default HitList;