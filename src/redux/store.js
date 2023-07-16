import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './slice';

export const store = configureStore({
  reducer: contactReducer,

  devTools: process.env.NODE_ENV !== 'production',
});
