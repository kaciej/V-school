import React from 'react';
import Badge from "./badge";

class BadgeList extends React.Component {
    genBages(){
        return this.props.badges.map((badge, index) => {
            return <Badge key={index} info={badge} />
        })
    }
    render() {
        return (
            <div>
                {this.genBages()}
            </div>
        );
    }
}

export default BadgeList;