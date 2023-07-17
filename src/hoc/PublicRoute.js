import React from 'react';
import { useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location.state?.from ?? '/'} />;
  }
  return children;
};
