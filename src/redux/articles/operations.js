import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pid-korkom-api.onrender.com/api";

export const fetchAll = createAsyncThunk(
  "articles/fetchAll",
  async (_, thunkAPI) => {
    try {
        const response = await axios.get('/articles')
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
