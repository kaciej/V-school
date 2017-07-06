import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import components
import SiteContainer from "./containers/site-container.js";
import Header from "./components/header.js";


let mySites = [
    {
        name: "New Zealand",
        image: "/images/newzealand.jpg",
        desc: "An awesome place to be."    
    },
     {
        name: "Canada",
        image: "/images/canada.jpg",
        desc: "Northern neighbors."    
    },
     {
        name: "Glacier",
        image: "/images/glacier.jpg",
        desc: "Montana beauty."    
    },
     {
        name: "Nepal",
        image: "/images/nepal.jpg",
        desc: "Top of the world."    
    },
     {
        name: "The Louvre",
        image: "/images/louvre.jpg",
        desc: "Museaum of Museaums"    
    },
     {
        name: "Portugal",
        image: "/images/portugal.jpg",
        desc: "City but the Sea."    
    }
    
]


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SiteContainer sites={mySites} />
            </div>
        )
    } 
}

ReactDOM.render(<App />, document.querySelector("#root"));