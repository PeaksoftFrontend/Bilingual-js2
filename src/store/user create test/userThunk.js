import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
// import { ShowSnackbar } from "../../components/UI/snackbar/SnackBar";

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
export const userPostQuestion = createAsyncThunk(
  "testById/userPostQuestion",
  async (payload, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`answer/`, payload);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOptionsByIdRequest = createAsyncThunk(
  "testById/userTestByIdRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `questions/getOptionsByQuestionId?questionId=${payload}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
