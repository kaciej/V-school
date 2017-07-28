import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";

//router
import  {Route, BrowserRouter, Switch, Link} from "react-router-dom";

import HomeContainer from "./containers/home-container.js";
import ContactContainer from "./containers/contact-container.js";
import BlogContainer from "./containers/blog-container.js";
import ArticleContainer from "./containers/article-container.js";
import Footer from "./components/footer.js";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">    
                <BrowserRouter>
                <div>
                <div className="nav">
                    <span className="nav-brand">SOUTHERN FLARE LASH</span>
                    <span className="text-right">
                        <Link className="nav-links" to="/">Home</Link>
                        <Link className="nav-links" to="/contact">Contact</Link>
                        <Link className="nav-links" to="/blog">Blog</Link>
                    </span>
                </div>
                    <Switch>
                        <Route exact path= "/" component={HomeContainer}/>
                        <Route exact path= "/contact" component={ContactContainer} />
                        <Route exact path= "/blog" component={BlogContainer} />
                        <Route exact path= "/article/:index" component={ArticleContainer} />
                    </Switch> 
                </div>       
                </BrowserRouter>
                <div className="row">
                     <Footer />
                </div>
               
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));