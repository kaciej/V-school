import React from "react"
import {Nav, Navbar, NavItem} from "react-bootstrap";

class CustomNavbar extends React.Component {
  render() {
    let navLinks = this.props.links.map((item) => {
      return (
        <NavItem href={item.link}>{item.text}</NavItem>
      )
    })
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.brand}</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {navLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNavbar;
