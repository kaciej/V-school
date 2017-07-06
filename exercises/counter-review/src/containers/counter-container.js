import React from "react";
import Counter from "../components/counter.js";
import autoBind from "react-autobind";


class CounterContainer extends React.Component{
    constructor(){
        super(); 
        this.state = {
            counter: 100,
            style: {
                color: "black",
                textAlign: "center",
                fontSize: "32px"
            }
        }
        autoBind(this);
    }
    up(){
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                color: "orange",
                backgroundColor: "blue",
            }
        });
    }
    down(){
        this.setState({
            counter: this.state.counter -1,
            style: {
                ...this.state.style,
                color: "blue",
                backgroundColor: "orange"
            }
        });

    }
    render(){
        return(
            <Counter style={this.state.style} counter={this.state.counter} handleUp={this.up} handleDown={this.down}/>
        )
    }
}

export default CounterContainer;