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
        `tests/getAllQuestionsByTestId?testId=${testId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const userTestQuestionGetByIdRequest = createAsyncThunk(
  "userTest/userTestQuestionGetByIdRequest",
  async (questionId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `questions/getOptionsByQuestionId?questionId=${questionId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
