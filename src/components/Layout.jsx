import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="phone-screen">
      <NavBar />
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
