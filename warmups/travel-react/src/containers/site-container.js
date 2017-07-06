import React from "react";
import Site from "../components/site.js";

class SiteContainer extends React.Component{
    alertDesc(desc) {
        alert(`Description: ${desc}`)
    }
    render(){
        let sites = this.props.sites.map((item, index) => {
            return <Site  key={item.name + index} handleClick={this.alertDesc} image={item.image} name={item.name} desc={item.desc} />
        });
        return(
            <div className="container">
                <div className="row">
                {sites}
                </div>
            </div>
        )
    }
}

export default SiteContainer;