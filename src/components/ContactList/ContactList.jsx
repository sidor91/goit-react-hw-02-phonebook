import React from 'react';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';

const ContactList = ({ data, onContactDelete }) => (
  <ListOfContacts>
    {data.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        number={contact.number}
        id={contact.id}
        handleDelete={onContactDelete}
      />
    ))}
  </ListOfContacts>
);

export default ContactList;
