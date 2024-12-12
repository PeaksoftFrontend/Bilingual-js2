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

export const s3AudioPostRequest = createAsyncThunk(
  "questions/s3AudioPostRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `s3file`,
        {
          multipartFile: payload,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const s3AudioDeleteRequest = createAsyncThunk(
  "questions/s3AudioDeleteRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `s3file/delete?fileName=${payload}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
