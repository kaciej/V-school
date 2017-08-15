import React, { Component } from 'react';

class Events extends Component {
    genEvents() {
        return this.props.events.map((item, index) => {
            return <div key={item.title + index}>
                    <h2>{item.title}</h2>
                    <p>Event begins at {item.checkIn} and ends at {item.checkOut}</p>
                    <p>{item.description}</p>
            </div>
        })
    }
    render() {
        return (
            <div>
                {this.genEvents()}
            </div>
        );
    }
}

export default Events;