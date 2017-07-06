import React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

class Navbar extends React.Component{
  render (){
    let links = this.props.links.map((item) => {
      return (
        <li key={item.text}>
          <a href={item.link}>
            {item.text}
          </a>
        </li>
      )
    });
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">{this.props.brand}</a>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <DropdownButton>
            <MenuItem eventKey="1">link</MenuItem>
            <MenuItem eventKey="2">Link</MenuItem>
            </DropdownButton>
          </li>
            {links}
        </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
