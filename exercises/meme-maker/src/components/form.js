import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="col-md-4 col-md-offset-1">
                <input onChange={(event) => {this.props.handleChange("top", event)}}
                 value={this.props.info.top} className="form-control" placeholder="Top Text" /> 
                <input onChange={(event) => {this.props.handleChange("bottom", event)}} 
                value={this.props.info.bottom} className="form-control" placeholder="Bottom Text"/>
                <input onChange={(event) => {this.props.handleChange("url", event)}}
                value={this.props.info.url} className="form-control" placeholder="Image URL"/>
                <button onClick={() => {this.props.handleClick(this.props.info)}} >MEME IT</button>
            </div>
        );
    }
}

export default Form;