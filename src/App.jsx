import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Contacts from 'pages/Contacts/Contacts';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
