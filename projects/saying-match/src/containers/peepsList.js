import React from "react";
import Peeps from "../components/peeps.js"

class PeepsList extends React.Component {
  alertQuote (quote, name){
    alert(`${quote}

    - Robin Williams as ${name} `)
  }
  render() {
    let boxes = this.props.works.map((item) => {
      return <Peeps key={item.name} handleQuote={this.alertQuote} img={item.img} movie={item.movie} name={item.name} quote={item.quote}/>

    })
    return (
        <div className="container-fluid body">
          <div className="row">
        {boxes}
        </div>
      </div>
    )
  }
}

export default PeepsList;
