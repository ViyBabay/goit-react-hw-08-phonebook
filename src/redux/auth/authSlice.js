import { loginThunk, logoutThunk, registerThunk } from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const pending = (state, action) => {
  state.loading = true;
  state.error = '';
};

const rejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: '',
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
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.user = {
          name: '',
          email: '',
        };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), pending)
      .addMatcher(
        isAnyOf(loginThunk.rejected, registerThunk.rejected),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;
