import React, { Component } from 'react';
import BodyContainer from "./body-container.js";

class BodyList extends Component {
    genPost() {
        return this.props.posts.sort((a, b) => {
            return (b.upVotes - b.downVotes) - (a.upVotes - a.downVotes);
        }).map((item, index) => {
            return <BodyContainer key={index + item.title}
                       post={item}
                       removePost={this.props.removePost}
                       updateUp={this.props.updateUp}
                       updateDown={this.props.updateDown} />
        })
    }
    render() {
        return (
            <center>
                <div className="body-container container">   
                    <div className="row">
                    {this.genPost()}
                    </div>
                </div>  
            </center>
            
        );
    }
}

export default BodyList;