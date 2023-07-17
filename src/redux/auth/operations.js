import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, instance, setToken } from 'config/instance';

export const registerThunk = createAsyncThunk(
  'auth/reg',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/signup', user);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('users/login', user);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('users/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
