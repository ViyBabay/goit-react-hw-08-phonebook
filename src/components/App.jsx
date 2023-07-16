import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from 'redux/operations';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const App = () => {
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
