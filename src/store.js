import { configureStore } from '@reduxjs/toolkit';
import LoginFormSlice from './Redux-tooltik/Reducers/LoginFormSlice';
import SignUpFormSlice from './Redux-tooltik/Reducers/SignUpFormSlice';

export const store = configureStore({
  reducer: {
    LoginForm: LoginFormSlice,
    SignUpForm: SignUpFormSlice
  },
})