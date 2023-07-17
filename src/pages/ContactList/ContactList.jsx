import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from 'redux/operations';
import { selectContacts, selectFilter } from 'redux/selectors';

const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className="contact-list">
      {visibleContacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <span className="contact-name">{contact.name}:</span>
          <span className="contact-number">{contact.number}</span>
          <button
            onClick={() => dispatch(deleteContactThunk(contact.id))}
            className="contact-delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
