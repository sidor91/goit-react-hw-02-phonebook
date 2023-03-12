import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FormElement,
  Label,
  InputField,
  Submit,
  LabelName,
} from './Form.styled';

const Form = ({ contacts, onFormSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const isNameTaken = contacts.find(contact => contact.name === name.value);
    if (isNameTaken) {
      return alert(`${isNameTaken.name} is already in contacts`);
    }
    onFormSubmit({ name: name.value, number: number.value, id: nanoid() });
    name.value = '';
    number.value = '';
  };


  return (
    <FormElement onSubmit={onSubmit}>
      <Label>
        <LabelName>Name</LabelName>
        <InputField
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <LabelName>Number</LabelName>
        <InputField
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Submit type="submit">Add contact</Submit>
    </FormElement>
  );
};

export default Form;

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};
