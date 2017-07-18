import React from 'react';

class Meme extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div style={{backgroundImage: `url(${this.props.url})`}}
                     className="meme text-center">
                    <div className="top-text">{this.props.top}</div>
                    <div className="bottom-text">{this.props.bottom}</div>
                </div>
            </div>
        );
    }
}


export default Meme;