import { CreateSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
  error: null,
};

export const articlesSlice = CreateSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default articlesSlice.reducer