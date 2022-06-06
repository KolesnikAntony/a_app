import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './general-slice';

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});
