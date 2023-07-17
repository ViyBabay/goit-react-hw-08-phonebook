import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Contacts from 'pages/Contacts/Contacts';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
