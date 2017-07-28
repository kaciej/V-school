import React, { Component } from 'react';

class Article extends Component {
    render() {
        console.log(this.props.article);
        return (
            <div>
                <h2>{this.props.article.name}</h2>
                <p>{this.props.article.text}</p>
            </div>
        );
    }
}

export default Article;