import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={'/contacts'} />;
  }
  return children;
};
