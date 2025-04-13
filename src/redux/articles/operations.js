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

export const fetchById = createAsyncThunk(
  "articles/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`articles/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchByCategory = createAsyncThunk(
  "articles/fetchByCategory",
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`articles/category/${category}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addArticle = createAsyncThunk(
  "articles/add",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/admin", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
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
      const response = await axios.delete(`/admin/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editArticle = createAsyncThunk(
  "articles/update",
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await axios.put(`/admin/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
