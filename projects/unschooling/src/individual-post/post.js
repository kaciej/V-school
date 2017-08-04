import React, {Component} from 'react';
import FontAwesome from "react-fontawesome";

class Post extends Component {
    genComments() {
        return this
            .props
            .currentPost
            .comments
            .map((item, index) => {
                return (
                    <p key={item + index}>{item}</p>
                )
            })
    }
    render() {
        return (
            <div className='text-center'>
                <h1 className="post-title">{this.props.currentPost.title}</h1>
                <div className="row">
                    <div
                        className="post-img col-md-8"
                        style={{
                        backgroundImage: `url("${this.props.currentPost.img}")`
                        }}>
                    </div>
                    <div className="post-desc row">{this.props.currentPost.description}</div>
                </div>
                <textarea
                    cols="50" rows="5"
                    className="post-comment-box"
                    placeholder="Write a Comment..."
                    onChange={(event) => {
                    this
                        .props
                        .handleComment(event)
                }}
                    value={this.props.input.comment}></textarea>
            <div>
                <button
                    className="add-comment-btn btn btn-success" 
                    onClick={() => {
                    this
                        .props
                        .addComment(this.props.currentPost._id, this.props.input.comment)
                }}>
                    Post</button>
            </div>
                
                <div>{this.genComments()}</div>

                <button
                    onClick={() => {
                    this
                        .props
                        .updateUp(this.props.currentPost._id)
                }}
                    className="vote-btns">
                    <FontAwesome name="heart" size="2x"/>
                </button>

                <div className="post-current-vote">{this.props.currentPost.upVotes}</div>

            </div>
        );
    }
}

export default Post;