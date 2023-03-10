import styled from 'styled-components';

const ContactItem = styled.li`
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
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
};