import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <input onChange={(event) => {this.props.handleChange("title", event)}} 
                    value={this.props.info.title}
                    placeholder="Title" className="form-control"/>
                </div>
                <div className="col-md-8">
                    <input onChange={(event) => {this.props.handleChange("url", event)}} 
                    value={this.props.info.url}
                    placeholder="Url" className="form-control"/>
                </div>
                <div className="col-md-8">
                    <input onChange={(event) => {this.props.handleChange("desc", event)}} 
                    value={this.props.info.desc}
                    placeholder="Description" className="form-control"/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button onClick={() => {this.props.handleClick(this.props.info);
                            this.props.clearInputs();
                            }}className="btn">Add To the List</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;