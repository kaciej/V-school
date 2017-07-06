import React from "react";

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          {this.props.children}
          <hr className="small title-line"/>
          <div className="subhead text-center">A Clean Blog Theme by Start Bootsrap</div>
        </header>
      );
}
};

export default Header;
