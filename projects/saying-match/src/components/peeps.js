import React from "react";

class Peeps extends React.Component {
  render() {
    return (
    <div className="col-md-4 col-sm-6 box text-center">
      <div className="img" style={{backgroundImage: `url('${this.props.img}')`}}></div>
        <h1 className="movieTitle text-center">{this.props.movie}</h1>
        <h3 className="charName text-center">{this.props.name}</h3>
    <button className="quote-btn" onClick={() => {this.props.handleQuote(this.props.quote, this.props.name)}}>
      Quote
    </button>
      </div>
    )
  }
}

export default Peeps;
