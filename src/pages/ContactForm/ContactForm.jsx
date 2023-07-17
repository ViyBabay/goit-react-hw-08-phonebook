import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      return toast.warn(`${name} is already in contacts!`);
    }
    dispatch(addContactThunk({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-6">PhoneBook</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="block mb-4">
          <span className="label">Name:</span>
          <input
            className="input w-full px-3 py-2 rounded"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="label">Number:</span>
          <input
            className="input w-full px-3 py-2 rounded"
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="btn btn-green w-full">
          Add contact
        </button>
      </form>
    </>
  );
};
