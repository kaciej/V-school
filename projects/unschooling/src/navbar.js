import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="nav-links">
                    <Link className="nav-home" to="/">HOME</Link>
                    <Link className="nav-post" to="/form/">SHARE IDEA</Link>
                </div>
                
            </div>
        );
    }
}

export default Navbar;