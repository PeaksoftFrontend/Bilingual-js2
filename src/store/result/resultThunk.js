import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getAllUserResultAnswer = createAsyncThunk(
  "result/getAllUserResultAnswer",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/result/`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getResultUserById = createAsyncThunk(
  "result/getResultUserById",
  async ({ testId, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/result/getById?testId=${testId}&userId=${userId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteResultUserAnswer = createAsyncThunk(
  "result/deleteResultUserAnswer",
  async ({ testId, userId }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/result/?userId=${userId}&testId=${testId}`
      );
      dispatch(getAllUserResultAnswer());

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getQuestionsResultsById = createAsyncThunk(
  "result/getQuestionsResultsById",
  async ({ questionId, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/result/getQuestionsResults?userId=${userId}&questionId=${questionId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
