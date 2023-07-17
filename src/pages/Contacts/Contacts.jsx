import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactThunk } from 'redux/operations';
import { ToastContainer } from 'react-toastify';
import { selectLoggedIn } from 'redux/auth/authSelectors';
import { ContactForm } from 'pages/ContactForm/ContactForm';
import { Filter } from 'pages/Filter/Filter';
import { ContactList } from 'pages/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContactThunk());
  }, [dispatch, isLoggedIn]);

  return (
    <div className="contacts-container">
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default Contacts;
