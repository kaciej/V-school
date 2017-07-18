import React from 'react';

class Form extends React.Component {
    render() {
        return (
                <div className="container makerBox">
                    <div className="row">
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("firstName", event)}} 
                            name="firstName" type="text" placeholder="First Name"
                            value={this.props.inputValue.firstName}/> 
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("email", event)}} 
                            name="email" type="text" placeholder="Email"
                            value={this.props.inputValue.email}/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("phone", event)}} 
                            name="phoneNumber" type="text" placeholder="Phone"
                            value={this.props.inputValue.phone}/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("lastName", event)}} 
                            name="lastName" type="text" placeholder="Last Name"
                            value={this.props.inputValue.lastName}/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("placeOfBirth", event)}} 
                            type="text" placeholder="Place of Birth"
                            value={this.props.inputValue.placeOfBirth}/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(event) => {this.props.handleChange("favFood", event)}} 
                            type="text" placeholder="Favorite Food"
                            value={this.props.inputValue.favFood}/>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <textarea className="tellUsMore" onChange={(event) => {this.props.handleChange("tellUsMore", event)}} 
                            type="text" placeholder="Tell us More"
                            value={this.props.inputValue.tellUsMore}/>
                        </div>
                    </div>
                    <div className="submitDiv text-center">
                        <button className="submit-btn" onClick={() => {this.props.handleSubmit()}}>Submit</button>
                    </div>

                </div>
        );
    }
}

export default Form;