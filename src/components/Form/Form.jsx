import React from 'react';
import { nanoid } from 'nanoid';
import { FormElement, Label, InputField, Submit } from './Form.styled';

class Form extends React.Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ id: nanoid() });
    this.reset();
    this.props.onSubmit(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormElement onSubmit={this.onSubmit}>
        <Label>
          Name
          <InputField
            onChange={this.onInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <InputField
            type='tel'
            name="number"
            onChange={this.onInputChange}
            value={number}
          />
        </Label>
        <Submit type="submit">Add contact</Submit>
      </FormElement>
    );
  }
}

export default Form;
