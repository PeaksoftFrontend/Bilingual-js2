import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const userTestRequest = createAsyncThunk(
  "test/userTestRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("tests", payload);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const testByIdRequest = createAsyncThunk(
  "testById/userTestByIdRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `tests/getById?testId=${payload}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
