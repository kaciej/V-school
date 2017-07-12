import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className="counter">
                <h1>{this.props.counter}</h1>
                <button onClick={this.props.handleAdd} className="add" > + </button>
                <button onClick={this.props.handleSub} className="sub"  > - </button>
            </div>
        );
    }
}

export default Counter;