import React from "react";

class Clicker extends React.Component{
    render(){
        return(
            <div className="col-md-3 col-md-offset-2 text-center">
             <button onClick={()=> {this.props.handleClick(this.props.backgroundColor)}} style={{backgroundColor : this.props.backgroundColor}}>Click It </button>
        <h3>{this.props.counter}</h3>
      </div>
        )
    }
}

export default Clicker;