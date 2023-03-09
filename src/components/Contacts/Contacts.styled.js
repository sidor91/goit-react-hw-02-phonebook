import styled from 'styled-components';


const ContactList = styled.ul``;
const Contact = styled.li`
  display: flex;
  align-items: center;
`;


const ContactName = styled.span`
  margin-right: 10px;
`;


const ContactNumber = styled.span`
  margin-right: 10px;
`;


const ContactDeleteButton = styled.button`
  font-size: 16px;
`;

export {
  ContactList,
  Contact,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
};
