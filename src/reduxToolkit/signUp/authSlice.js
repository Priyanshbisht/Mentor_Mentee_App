import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
   name: 'auth',
   initialState: {
    refCode: '',
    email: '',
    firstName: '',
    lastName: '',
    country_code: '',
    mobileNumber: '',
    password: '',
    role: 1,
    token: '', // Add token to initial state
    isLoading: false,
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
   },
});

export const { updateField, setToken, setLoading } = authSlice.actions;

export default authSlice.reducer;
