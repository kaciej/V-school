import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <a href="https://twitter.com/robinwiliiams_?lang=en" className="icons">
                <FontAwesome name="twitter" size="3x"/>
                </a>
                <a href="https://www.facebook.com/Actor-Robin-Williams-452622591476178/" className="icons">
                <FontAwesome name="facebook" size="3x"/>
                </a>
                <a href="https://www.instagram.com/therobinwilliams/"className="icons">
                <FontAwesome name="instagram" size="3x"/>
                </a>
            </footer>
        )
    }
}

export default Footer;