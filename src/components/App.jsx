import React from 'react';
import Section from './Section'
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  contactDeleteHandler = data => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== data.target.id
        ),
      };
    });
  };

  filterInputHandler = e => {
    this.setState({ filter: e.target.value });
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.showFilteredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <Section title="Add a contact">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Filter value={filter} onChange={this.filterInputHandler} />
            <ContactList
              data={filteredContacts}
              onContactDelete={this.contactDeleteHandler}
            />
          </Section>
        )}
      </div>
    );
  }
};

export { App };