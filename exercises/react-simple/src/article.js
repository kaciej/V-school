import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h2 className="article-title">{this.props.name}</h2>
        <h3 className="article-sub">{this.props.desc}</h3>
        <p className="article-ps">Posted by End Bootsrap on {this.props.date}</p>
      <button onClick={() => {this.props.handleDescription(this.props.desc)}}>Description</button>
    <button onClick={() => {this.props.handleFavorite(this.props.name)}}>
      Favorite
    </button>
      </div>
    );
  }
}

export default Article;
