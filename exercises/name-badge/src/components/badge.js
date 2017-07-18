import React from 'react';

class Badge extends React.Component {
    render() {
        return (
            <div className="container ">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 badge-container">
                <div className="col-md-12 badge">
                     Name Badge
                </div>
                <div className="col-md-6">
                <div className="output">Name: {this.props.info.firstName} {this.props.info.lastName}</div>
                </div>
                <div className="col-md-6">
                <div className="output">Phone: {this.props.info.phone}</div>
                </div>
                <div className="col-md-6">
               <div className="output" >Place of Birth: {this.props.info.placeOfBirth}</div>
               </div>
               <div className="col-md-6">
               <div className="output">Favorite Food: {this.props.info.favFood}</div>
               </div>
                <div className="col-md-6">
               <div className="output">Email: {this.props.info.email}</div>
               </div>
                 <p className="more-box col-md-8 col-md-offset-2">{this.props.info.tellUsMore}</p>
            </div>
            </div>
            </div>
            
        );
    }
}

export default Badge;