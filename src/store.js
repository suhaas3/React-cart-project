import { configureStore } from '@reduxjs/toolkit';
import LoginFormSlice from './Redux-tooltik/Reducers/LoginFormSlice';
import SignUpFormSlice from './Redux-tooltik/Reducers/SignUpFormSlice';
import AuthSlice from './Features/Auth/AuthSclice';
import ProductSlice from './Redux-tooltik/Reducers/ProductsSlice';

export const store = configureStore({
  reducer: {
    LoginForm: LoginFormSlice,
    SignUpForm: SignUpFormSlice,
    auth: AuthSlice,
    products: ProductSlice
  },
})