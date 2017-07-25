import React, { Component } from 'react';

class Color extends Component {
    render() {
        return (
            <div className= "box text-center" style={{backgroundColor: ` #${this.props.oldColor}`}} >
                <h2>{this.props.name}</h2>
                <button onClick={() => {this.props.changeColor()}} >Change Color</button>
            </div>
        );
    }
}

export default Color;