import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { ShowSnackbar } from "../../components/UI/snackbar/SnackBar";

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
export const userAnswerPostRequest = createAsyncThunk(
  "questions/userAnswerPostRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("answer/", payload);
      ShowSnackbar("You have successfully passed the test!", "success");

      return data;
    } catch (error) {
      // ShowSnackbar(error.message, "error");
      ShowSnackbar("This user have answer to this test", "error");

      return rejectWithValue(error.message);
    }
  }
);
