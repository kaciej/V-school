import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span className="brand">
          <a href="#">Maybe Webstorm</a>
        </span>
        <span>
          <a href="#">Maybe Atom</a>
        </span>
      </div>
    )
  }
}

export default Navbar;
