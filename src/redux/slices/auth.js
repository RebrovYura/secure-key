import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (params) => {
    const { data } = await axios.post(
      'http://localhost:8090/api/auth/login',
      params,
    );
    return data;
  },
);

export const fetchAuthMe = createAsyncThunk(
  'auth/fetchAuthMe',
  async (params) => {
    const { data } = await axios.get('api/user/info', params);
    return data;
  },
);

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (params) => {
    const { data } = await axios.post(
      'http://localhost:8090/api/auth/register',
      params,
    );
    return data;
  },
);

const initialState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = 'loaded';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      .addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const selectisAuth = (state) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
