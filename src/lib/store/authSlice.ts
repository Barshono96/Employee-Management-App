import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, User, LoginCredentials, SignupCredentials } from '@/types/auth';
import { v4 as uuidv4 } from 'uuid';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    login: (state, action: PayloadAction<LoginCredentials>) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        (u: User) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      
      if (user) {
        state.user = user;
        state.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    },
    signup: (state, action: PayloadAction<SignupCredentials>) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const exists = users.some((u: User) => u.email === action.payload.email);
      
      if (!exists) {
        const newUser: User = {
          id: uuidv4(),
          ...action.payload,
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        state.user = newUser;
        state.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(newUser));
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('currentUser');
    },
    initializeAuth: (state) => {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        state.user = JSON.parse(currentUser);
        state.isAuthenticated = true;
      }
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setUser, login, signup, logout, initializeAuth, updateProfile } = authSlice.actions;
export default authSlice.reducer;
