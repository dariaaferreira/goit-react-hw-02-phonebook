import React from 'react';
import PropTypes from 'prop-types';

import { ListItems, Item, Span, Button, Text } from './ContactList.styled';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <>
      {contacts.length > 0 ? (
        <ListItems>
          {contacts.map(({ id, name, number }) => (
            <Item key={id}>
              <Span>{name}:</Span> {number}
              <Button onClick={() => handleDeleteContact(id)}>&#x2715;</Button>
            </Item>
          ))}
        </ListItems>
      ) : (
        <Text>Phonebook is empty.
        Add your first contact!</Text>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
