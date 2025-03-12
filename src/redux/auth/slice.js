import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
  isRefreshing: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(login.pending, (state) => {
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogedIn = true;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
