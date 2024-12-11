import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { ShowSnackbar } from "../../components/UI/snackbar/SnackBar";
import { getTestByIdRequest } from "../admin create test/adminCreatetestThunk";

export const questionsPostRequest = createAsyncThunk(
  "questions/questionsPostRequest",
  async (
    { data, selectedValue, testInfoId, navigate },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `questions?testId=${testInfoId}&questionType=${selectedValue}`,
        data
      );

      ShowSnackbar("Test question added !", "success");
      navigate(`/admin/test-page/test-info/${testInfoId}`);

      return response.data;
    } catch (error) {
      ShowSnackbar(error.message, "error");

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

export const deleteTestQuestionById = createAsyncThunk(
  "questions/deleteTestQuestionById",
  async ({ id, testInfoId }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.delete(`questions?questionId=${id}`);
      dispatch(getTestByIdRequest(testInfoId));

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTestQuestionById = createAsyncThunk(
  "questions/updateTestQuestionById",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `questions?questionId=${payload}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
