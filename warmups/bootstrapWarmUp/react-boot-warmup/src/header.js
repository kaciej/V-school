import React from "react";
import FontAwesome from "react-fontawesome";

class Header extends React.Component {
  render () {
    return (
      <div className="background">
          <div className="container-fluid">
              <img className="img-responsive center-block man-img" src="https://coursework.vschool.io/content/images/2015/07/profile.png" />
              <h1 className="title text-center">START BOOTSTRAP</h1>
            <div className="icons">
                  <div className="line"></div>
                <FontAwesome name="star" className="fa fa-star" />
                <i ></i>
              <div className="line"></div>
              </div>
              <div className="info">Web Devloper-Graphic Artist-User Experience Designer</div>
          </div>
      </div>
    )
  }
}

export default Header;
