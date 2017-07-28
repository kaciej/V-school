import React from 'react';
import GoogleMapReact from "google-map-react";
import FontAwesome from "react-fontawesome";


class ContactUs extends React.Component {
    constructor(props){
        super(props);
        this.props.randomColor();
    }
    render() {
        return (
            <div className="row contact-box">
                <div className="col-md-12 contact-us">Contact Us</div>
                <div className="row">
                    <div className="col-md-3 col-xs-4 col-md-offset-1 col-xs-offset-1">
                            <div className="col-md-12 col-md-offset-2 schedule"><a href="https://www.schedulicity.com/scheduling/sflpw8">Schedule Online</a></div>
                            <div className="col-md-2 map-marker"><a href="https://www.google.com/maps/place/316+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986">
                                <FontAwesome style={{color: `#${this.props.oldColor}`}} name="map-marker" size="3x"/></a>
                            </div>
                            <div className="col-md-10 address">316 W Midwest Ave<br/>Casper, WY 82601</div>
                    </div>
                    <div className="col-md-5  col-xs-9 map col-xs-offset-2">
                    <GoogleMapReact center={{lat: 42.846275, lng: -106.328499}}
                        zoom={15} >
                            <div lat={42.846275} lng={-106.328499}><a href="https://www.google.com/maps/place/316+W+Midwest+Ave,+Casper,+WY+82601/@42.8462751,-106.3306873,17z/data=!3m1!4b1!4m5!3m4!1s0x8760bca14c5b7b2b:0xa8acf35ed02cdaf0!8m2!3d42.8462751!4d-106.3284986">
                            <FontAwesome className="marker" name="map-marker" size="3x"/></a></div>
                    </GoogleMapReact>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default ContactUs;