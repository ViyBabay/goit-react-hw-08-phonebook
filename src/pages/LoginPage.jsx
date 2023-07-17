import React from 'react';
import { useState } from 'react';
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email"
          onChange={handleChangeInput}
          name="email"
          value={credentials.email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChangeInput}
          name="password"
          value={credentials.password}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
