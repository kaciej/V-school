import React from 'react';

class Form extends React.Component {
    render() {
        return (
                <div className="container makerBox">
                    <div className="row">
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="firstName" type="text" placeholder="First Name"/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="email" type="text" placeholder="Email"/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="phone" type="text" placeholder="Phone"/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="lastName" type="text" placeholder="Last Name"/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="placeOfBirth" type="text" placeholder="Place of Birth"/>
                        </div>
                        <div className="col-md-6 inputs">
                            <input onChange={(e) => {this.props.handleChange(e)}} 
                            name="favFood" type="text" placeholder="Favorite Food"/>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <input className="tellUsMore" onChange={(e) => {this.props.handleChange(e)}} 
                            name="tellUsMore" type="text" placeholder="Tell us More"/>
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