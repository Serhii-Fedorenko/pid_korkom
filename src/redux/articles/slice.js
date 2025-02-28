import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default articlesSlice.reducer