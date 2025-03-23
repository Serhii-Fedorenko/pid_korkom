import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://pid-korkom-api.onrender.com/api";
axios.defaults.baseURL = "http://localhost:3000/api";

export const fetchAll = createAsyncThunk(
  "articles/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/articles");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addArticle = createAsyncThunk(
  "articles/add",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/articles", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/delete",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/articles/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editArticle = createAsyncThunk(
  'articles/update',
  async ({id, credentials}, thunkAPI) => {
    try {
      const response = await axios.put(`/articles/${id}`, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
