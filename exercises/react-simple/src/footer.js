import React from "react";
import FontAwesome from "react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <hr className="last-line"/>
        <div>
          <a href="#" className="fa-stack fa-lg icons">
            <FontAwesome stack="2x" name="circle"/>
            <FontAwesome stack="1x" name="twitter" inverse/>
          </a>
          <a href="#" className="fa-stack fa-lg icons">
            <FontAwesome stack="2x" name="circle"/>
            <FontAwesome stack="1x" name="facebook" inverse/>
          </a>
          <a href="#" className="fa-stack fa-lg icons">
            <FontAwesome stack="2x" name="circle"/>
            <FontAwesome stack="1x" name="github" inverse/>
          </a>
        </div>
        <div className="copyright">Copyright © Your Website 2016</div>
      </footer>
    );
  }
}

export default Footer;
