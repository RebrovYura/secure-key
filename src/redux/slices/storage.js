import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

const initialState = {
  data: [],
  status: 'loading',
};

const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducer: {},
});

export const storageReducer = storageSlice.reducer;
