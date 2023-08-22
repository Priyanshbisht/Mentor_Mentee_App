import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    email: '',
    password: '',
    token: '',
    isLoading: false,
    isLoggedIn: false,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setLoggedIn: (state) => {
        state.isLoggedIn = true;
      },
}});

export const { updateField, setToken, setLoading, setLoggedIn, } = loginSlice.actions;

export const selectEmail = (state) => state.login.email; // Selector to get email
export const selectPassword = (state) => state.login.password; // Selector to get password

export default loginSlice.reducer;