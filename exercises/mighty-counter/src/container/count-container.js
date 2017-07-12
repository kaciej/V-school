import React from "react";
import Clicker from "../components/clicker.js";
import autoBind from "react-autobind";

class CountContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            red: 0,
            blue: 0
        }
       autoBind(this);
    }
   click(backgroundColor){
       if(backgroundColor == "blue"){
        this.setState({
            ...this.state, 
        red: this.state.red -1,
        blue: this.state.blue + 1
        });
       }else {
           this.setState({
               ...this.state,
               red: this.state.red +1,
               blue: this.state.blue -1
           });
       }
   }

    render(){
        return(
            <div className="container" >
                <div className="row">
            <Clicker handleClick={this.click} backgroundColor="red" counter={this.state.red}/>
            <Clicker handleClick={this.click} backgroundColor="blue" counter={this.state.blue}/>
                </div>
            </div>
        )
    }
}

export default CountContainer;