import React from 'react';

import Character from "./character.js"

class CharList extends React.Component {
    genChar(){
       return this.props.chars.map((item, index) => {
            return <Character item={item}
             handleRemove={this.props.remove} 
             key={item + index}
             index={index}
             />
        })
    }
    render() {
        console.log(this.props.char)
        return (
            <div>
                {this.genChar()}
            </div>
        );
    }
}

export default CharList;