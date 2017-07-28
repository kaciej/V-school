import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Blog extends Component {
    genArticleLinks() {
        return this.props.articles.map((item, index) => {
            return (
            <div>
                <Link key={item.name + index} to={`/article/${index}`} >{item.name}</Link>
            </div> 
            )
        })
    }
    render() {
        return (
            <div>
                <h1 className="blog-title text-center">Beauty Talk</h1>
                    <div>
                        {this.genArticleLinks()}
                    </div>    
            </div>
        );
    }
}

export default Blog;