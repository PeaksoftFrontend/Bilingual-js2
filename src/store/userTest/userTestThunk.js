import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const userTestGetRequest = createAsyncThunk(
  "userTest/userTestGetRequest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("tests");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userTestGetByIdRequest = createAsyncThunk(
  "userTest/userTestGetByIdRequest",
  async (testId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `tests/getById?testId=${testId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
