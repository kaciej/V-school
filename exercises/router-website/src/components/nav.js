import React, { Component } from 'react';

//router
import  { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
           <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog">Blog</Link>
             </div>
        );
    }
}

export default Nav;