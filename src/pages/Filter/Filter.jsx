import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <h2 className="contacts-heading">Contacts</h2>
      <label className="filter-label">
        <p className="label-text">Find contact by name:</p>
        <input
          className="filter-input"
          type="text"
          onChange={handleFilterChange}
        ></input>
      </label>
    </>
  );
};
