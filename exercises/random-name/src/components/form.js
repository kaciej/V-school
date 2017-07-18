import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="row input-row">
                <div className= "col-md-4">
                <input onChange={(event) => {this.props.handleChange("name1", event)}}
                value={this.props.info.name1} 
                placeholder= "Name Please"/>
                </div>
                <div className= "col-md-4">
                <input onChange={(event) => {this.props.handleChange("name2", event)}} 
                value={this.props.info.name2}
                placeholder= "Name Please"/>
                </div>
                <div className= "col-md-4">
                <input onChange={(event) => {this.props.handleChange("name3", event)}}
                value={this.props.info.name3}
                 placeholder= "Name Please"/>
                </div>
                <div className="text-center">
                <button onClick={() => {this.props.handleSubmit(this.props.info);
                    this.props.clearInputs();
                    }} className="btn-danger">Submit</button>
                </div>
            </div>
        );
    }
}

export default Form;
