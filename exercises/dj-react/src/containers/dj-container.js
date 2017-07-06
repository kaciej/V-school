import React from "react";
import Dj from "../components/dj.js";
import autoBind from "react-autobind";


class DjContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            style: {
                backgroundColor: "orange",
                width: "300px",
                height: "300px",
                marginTop: "200px",

            }
        }
        autoBind(this);
    }
    componentDidMount(){
        window.addEventListener("scroll", this.greenSquare)
    }
    blueCirlce(){
        this.setState({
            style: {
            ...this.state.style,
            backgroundColor: "blue",
            borderRadius: 350,
            width: 300,
            }
        })
    }
    redOval(){
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "red",
                borderRadius: "50%",
                width: 550
            }
        })
    }
    greenSquare(){
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "green",
                borderRadius: 100
            }
        })
    }
  
    render(){
          let boxes = [];
        for(let i = 0; i<5; i++){
            boxes.push(<Dj style={this.state.style} handleClick={this.blueCirlce} handleMouseOver={this.redOval}/>)
        }
        return(
            <div className="wrapper">
            {boxes}
            </div>
        )
    }
}

export default DjContainer;