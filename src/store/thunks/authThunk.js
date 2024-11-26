import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";
import { STORAGE_KEY } from "../../utils/constants/auth";
import { ShowSnackbar } from "../../components/UI/snackbar/SnackBar";

export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("auth/signIn", payload);

      localStorage.setItem(
        STORAGE_KEY.BILINGUAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );

      ShowSnackbar("Authorization successful!", "success");

      return response.data;
    } catch (error) {
      ShowSnackbar(error.response?.data?.message, "error");

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("auth/signUp", payload);

      localStorage.setItem(
        STORAGE_KEY.BILINGUAL_STORAGE_KEY,
        JSON.stringify(response.data)
      );
      ShowSnackbar("Registration successful!", "success");

      return response.data;
    } catch (error) {
      ShowSnackbar(error.response?.data?.message, "error");

      return rejectWithValue(error.response.data.message);
    }
  }
);
