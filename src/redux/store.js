// oo.dnipro@ukr.net
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactReducer } from './slice';
import { authReducer } from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import { contactReducer } from './slice';
// import { authReducer } from './auth/authSlice';

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   auth: authReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware => getDefaultMiddleware(),
//   devTools: process.env.NODE_ENV !== 'production',
// });

// import { configureStore } from '@reduxjs/toolkit';
// import { contactReducer } from './slice';
// import { authReducer } from './auth/authSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     auth: authReducer,
//   },

//   devTools: process.env.NODE_ENV !== 'production',
// });
