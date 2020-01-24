import React, { Component } from 'react'

import { ContactList } from './ContactList.js';

export default class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts.slice(),
            selectedContacts: this.props.contacts.slice(0,5)
        };
    };

    render() {
        return (
            <div style={{margin: "20px auto", border: "1px solid black", maxWidth: "25%"}}>
                <h1>Overview</h1>
                <ContactList contactList={this.state.selectedContacts}/>
            </div>
        )
    }
}
