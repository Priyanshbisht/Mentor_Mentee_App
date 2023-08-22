import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../../reduxToolkit/login/loginSlice' // Make sure the path is correct
import authReducer from './authSlice'; // Make sure the path is correct

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authReducer,
  },
});

export default store;
