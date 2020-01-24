import React from 'react'

import ContactCard from './ContactCard.js';

export const ContactList = (contacts) => {
    console.log( "ContactList", contacts );
    const output = contacts.contactList.map( (contact,id) => {
          return <ContactCard key={id} {...contact} />
        });
    return( output );
};


