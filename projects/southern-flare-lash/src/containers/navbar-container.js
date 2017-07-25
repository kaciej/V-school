import React from 'react';
import CustomNavbar from "../components/custom-navbar.js";

class NavbarContainer extends React.Component {
    render() {
let myLinks = [
  {
    text: "HOME",
    link: "http://www.robin-williams.net/comedygraphy.php"
  },
  {
    text: "ABOUT",
    link: "http://www.robin-williams.net/plays.php"
  },
  {
    text: "PRICING",
    link: "http://www.robin-williams.net/filmography.php"
  },
  {
    text: "GALLERY",
    link: ""
  },
  {
    text: "CONTACT US",
    link: "#contact"
  }
 ];
let brand = "Sothern Flare Lash"
        return (
            <div>
               <CustomNavbar brand={brand} links={myLinks}/> 
            </div>
        );
    }
}

export default NavbarContainer;