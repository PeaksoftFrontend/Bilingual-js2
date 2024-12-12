import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getUserResults = createAsyncThunk(
  "result/ getUserResults",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/result/userGetResults");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
