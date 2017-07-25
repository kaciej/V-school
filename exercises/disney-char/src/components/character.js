import React from 'react';
import FontAwesome from "react-fontawesome";

class Character extends React.Component {
    render() {
        return (
            <div className="col-md-6 text-center">
                <h3 className="title">{this.props.item.title}</h3>
                <div className="char-box text-center"
                style= {{backgroundImage: `url(${this.props.item.url})`}}>
                <button className="delete" onClick={() => {this.props.handleRemove(this.props.index)}}>X</button>
                <FontAwesome className="pencil" name="pencil-square" size="2x"/>
                </div>
                    <h5 className="desc">{this.props.item.desc}</h5>
                    
                    <div>
                    <input />
                    <input />
                    <input />>
                    <button>Save</button>
                    </div>
                    
                    
            </div>
        );
    }
}

export default Character;