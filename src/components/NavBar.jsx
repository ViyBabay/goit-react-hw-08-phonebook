import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/operations';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header>
      <nav>{isLoggedIn && <NavLink to="/contacts" />}</nav>
      {isLoggedIn && <h1>Hello {user.name}</h1>}

      <div>
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
