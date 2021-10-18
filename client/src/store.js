import { configureStore } from '@reduxjs/toolkit';
import pageReducer from '../reducers/pageSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});
