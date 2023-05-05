import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
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
  