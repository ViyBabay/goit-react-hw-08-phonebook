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
    <header className="phone-screen mb-4">
      <nav className="flex justify-center mb-4">
        {isLoggedIn && <NavLink to="/contacts" />}
        {!isLoggedIn && (
          <div>
            <NavLink to="/login" className="btn btn-green mr-2">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-green">
              Register
            </NavLink>
          </div>
        )}
      </nav>
      {isLoggedIn && (
        <h1 className="text-xl text-center mb-2">Hello {user.name}</h1>
      )}
      <div className="flex justify-center">
        {isLoggedIn && (
          <button
            onClick={() => dispatch(logoutThunk())}
            className="btn btn-green"
          >
            Exit
          </button>
        )}
      </div>
    </header>
  );
};

export default NavBar;
