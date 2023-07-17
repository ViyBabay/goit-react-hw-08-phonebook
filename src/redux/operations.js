import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken } from 'config/instance';

// axios.defaults.baseURL = 'https://64b05da3c60b8f941af5a148.mockapi.io';

export const fetchContactThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',

  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;
    if (!persistedToken) {
      return rejectWithValue('Token is not find!');
    }
    try {
      setToken(persistedToken);
      const { data } = await instance.get('users/current');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);
