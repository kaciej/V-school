import React from "react";

class Navbar extends React.Component {
  render (){
    return(
      <nav className="navbar navbar-inverse navbar-custom">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#">START BOOTSTRAP</a>
              </div>
              <ul className="nav navbar-nav">
                  <li><a href="#">PORTFOLIO</a></li>
                  <li><a href="#">ABOUT</a></li>
                  <li><a href="#">CONTACT</a></li>
              </ul>
          </div>
      </nav>
    )
  }
}

export default Navbar;
