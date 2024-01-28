import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { storageReducer } from './slices/storage';

const store = configureStore({
  reducer: {
    auth: authReducer,
    storage: storageReducer,
  },
});

export default store;
