import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    dispatch(registerThunk(credentials))
      .unwrap()
      .then(() => navigate('/contacts'));
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
          placeholder="name"
          onChange={handleChangeInput}
          name="name"
          value={credentials.name}
          className="input w-full max-w-xs mb-4"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
