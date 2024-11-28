import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const questionsPostRequest = createAsyncThunk(
  "questions/questionsPostRequest",
  async ({ data, selectedValue }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `questions?testId=1&questionType=${selectedValue}`,
        data
      );

      //   ShowSnackbar("Authorization successful!", "success");

      return response.data;
    } catch (error) {
      //   ShowSnackbar(error.response?.data?.message, "error");

      return rejectWithValue(error.response.data.message);
    }
  }
);
