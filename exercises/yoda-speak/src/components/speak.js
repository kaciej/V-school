import React from 'react';

class Speak extends React.Component {
    render() {
        return (
            <div className="speak">
                <h3>Wirte a sentence and it will be translated into Yoda Speak.</h3>
                <input value={this.props.input} 
                    onChange={(event) => {this.props.handleChange(event)}}/>
                <button onClick={() => {this.props.handleClick(this.props.input)}} className="yodafy-btn">Yodafy</button>
                <h1>{this.props.text}</h1>
                <div className="yoda-pic"></div>
            </div>
        );
    }
}

export default Speak;