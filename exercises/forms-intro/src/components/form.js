import React from "react";


class Form extends React.Component{
    genNames() {
  this.nameListItems = this.props.names.map((item, index) =>{
            return(
             <li onClick={() => {
                 this.props.handleRemove(index);
                 }} key={item + index}>{item}</li>
            );
        });
    }
    render(){
        this.genNames();
        return(
            <div className="text-center">
                <h1>{this.props.brand}</h1>
            <p>Else SCREW OFF!</p>
            <div>
            <input value={this.props.nameValue} onChange={this.props.handleInput}  />
            <button onClick={() => {this.props.handleClicked()}} >Submit</button>
            <ul>
                {this.nameListItems}
            </ul>
            </div>
            </div>
        )
    }
}

export default Form;