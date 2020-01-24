import React, { Component } from 'react'

export default class ContactCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        return (
            <div style={{display: "flex", justifyContent: "flex-start" }}>
                <div><img src={this.props.pictureUrl} width="100px" alt="" /></div>
                <div style={{flexGrow: 2}}>{this.props.name}</div>
                <div>{this.props.popularity}</div>
            </div>
        )
    }
}
