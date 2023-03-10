import {
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
} from './Contact.styled';

const Contact = ({ name, number, id, handleDelete }) => 
  (<ContactItem>
    <ContactName>{name}:</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <ContactDeleteButton
      type="button"
      onClick={handleDelete}
      id={id}
    >
      Delete
    </ContactDeleteButton>
  </ContactItem>);


export default Contact;