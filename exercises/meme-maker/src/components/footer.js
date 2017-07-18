import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <div className="row">
            <div className="footer">
                <div className="icon">
                <FontAwesome stack="2x" name="github" className="git"/>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;