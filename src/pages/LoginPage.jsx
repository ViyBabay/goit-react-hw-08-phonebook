import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    dispatch(loginThunk(credentials))
      .unwrap()
      .then(() => {
        toast.success('Welcome back!');
      });
  };
  const handleChangeInput = ({ target }) => {
    const { name, value } = target;
    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="email"
          onChange={handleChangeInput}
          name="email"
          value={credentials.email}
          className="input w-full max-w-xs mb-4"
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChangeInput}
          name="password"
          value={credentials.password}
          className="input w-full max-w-xs mb-4"
        />
        <button className="btn btn-green w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
