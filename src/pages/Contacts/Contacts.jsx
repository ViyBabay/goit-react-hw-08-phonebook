import React from 'react';
import { ContactForm } from 'pages/ContactForm/ContactForm';
import { ContactList } from 'pages/ContactList/ContactList';
import { Filter } from 'pages/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from 'redux/operations';
import { ToastContainer } from 'react-toastify';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactThunk());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Contacts;
