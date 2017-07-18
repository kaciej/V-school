import React from 'react';

class Name extends React.Component {
    render() {
        return (
            <div className="row">
                <h1 className="text-center">{this.props.randomName}</h1>
            </div>
        );
    }
}

export default Name;