'use client';

import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';
import authReducer from './authSlice';
import { loadState, saveState } from './localStorage';

// Define the RootState type
export interface RootState {
  employee: ReturnType<typeof employeeReducer>;
  auth: ReturnType<typeof authReducer>;
}

const preloadedState = loadState() as RootState;

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    auth: authReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
