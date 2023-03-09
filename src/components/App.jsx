import React from 'react';
import Section from './Section'
import Form from './Form';
import Contacts from './Contacts';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = (data) => {
    this.setState(prevState => { return { contacts: [...prevState.contacts, data] }; })
  }

  contactDeleteHandler = (data) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => contact.id !== data)}
    })
  }

  render() {
    const { contacts } = this.state;
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
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts">
            <Contacts data={contacts} onContactDelete={this.contactDeleteHandler} />
          </Section>
        )}
      </div>
    );
  }
};

export { App };