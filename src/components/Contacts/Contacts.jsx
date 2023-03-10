import React from 'react';
import {
  ContactList,
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
} from './Contacts.styled';

class Contacts extends React.Component {
    handleDelete = (e) => {
        this.props.onContactDelete(e.currentTarget.id);
    };
    
  render() {
    return (
      <ContactList>
        {this.props.data.map(contact => (
          <Contact key={contact.id}>
            <ContactName>{contact.name}:</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <ContactDeleteButton
              type="button"
              onClick={this.handleDelete}
              id={contact.id}
            >
              Delete
            </ContactDeleteButton>
          </Contact>
        ))}
      </ContactList>
    );
  }
}

export default Contacts;
