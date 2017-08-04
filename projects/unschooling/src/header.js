import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-img text-center">
                
                    <h1 className="header-title">Unschooling Nook</h1>
                    <h3 className="header-quote">"Teach them how to learn, not what to learn."</h3>
                    <Link to="form"><button className="header-btn btn">Share an Idea</button></Link>
                </div>
                
            </div>
        );
    }
}

export default Header;