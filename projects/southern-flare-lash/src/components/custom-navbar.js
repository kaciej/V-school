import React from "react";
import {Nav, Navbar, NavItem} from "react-bootstrap";
// import NavItem from 'react-bootstrap';

class CustomNavbar extends React.Component {
  render() {
    let myLinks = this.props.links.map((item) => {
      return (
        <NavItem key={item.text} href={item.link}>{item.text}</NavItem>
      )
    })
    return (
      <Navbar >
      <Navbar.Header>
          <Navbar.Brand>
            <h2>Southern Flare Lash</h2>
          </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>
        <Navbar.Collapse >
          <Nav>
          {myLinks}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default CustomNavbar;