import { createSlice } from "@reduxjs/toolkit";
import { addArticle, deleteArticle, editArticle, fetchAll } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  filter: "",
  error: null,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addArticle.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editArticle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editArticle.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default articlesSlice.reducer;
