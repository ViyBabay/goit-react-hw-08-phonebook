import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/operations';

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header>
      <nav>
        {/* <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink> */}
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
      {isLoggedIn && <h1>Hello {user.name}</h1>}

      <div>
        {!isLoggedIn && (
          <button onClick={() => navigate('/login')}>Login</button>
        )}
        {!isLoggedIn && (
          <button onClick={() => navigate('/register')}>Register</button>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logoutThunk())}>Exit</button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
