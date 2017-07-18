import React from 'react';

class Character extends React.Component {
    render() {
        return (
            <div className="col-md-6 text-center">
                <h3 className="title">{this.props.title}Woody</h3>
                <div className="char-box text-center"
                style= {{backgroundImage: `url(https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-10n7ovy_9b42e613.jpeg)`}}>
                </div>
                    <h5 className="desc">{this.props.desc}Best Buddy</h5>
            </div>
        );
    }
}

export default Character;