const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    email: '',
  },
  token: '',
  error: null,
  loading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = authSlice.reducer;
