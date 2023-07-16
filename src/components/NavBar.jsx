import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
