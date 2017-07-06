import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import NavItem from './NavItem.js'
class CustomNavbar extends React.Component {
  render() {
    let myLinks = this.props.links.map((item) => {
      return (
        <NavItem href={item.link}>{item.text}</NavItem>
      )
    })
    return (
      <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Toggle/>
      </Navbar.Header>
        <Navbar.Collapse collapseOnSelect>
          <Nav>
          {myLinks}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default CustomNavbar;
