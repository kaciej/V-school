import React from "react";


class Dj extends React.Component{
    render() {
        return( 
            <div className="box" style={this.props.style} onClick={() => {this.props.handleClick()}} onMouseOver={() => {this.props.handleMouseOver()}} ></div>
        )
    }
}

export default Dj;