import React, { Component } from 'react';

class Chat extends Component {
    geChats() {
        return this.props.chats.map((item, index) => {
            return (
                <div key={item.message + index} >
                    {item.username} said {item.message};
                </div>
            )
        })
    }
    render() {
        return (
            <div>
               {this.geChats()} 
            </div>
        );
    }
}

export default Chat;