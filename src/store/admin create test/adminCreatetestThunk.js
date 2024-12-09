import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getTestRequest = createAsyncThunk(
  "test/getTestRequest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/tests");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const postTestRequest = createAsyncThunk(
  "test/postTestRequest",
  async (testsData, { rejectWithValue }) => {
    try {
      await axiosInstance.post("/tests", testsData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const putTestRequest = createAsyncThunk(
  "test/putTestRequest",
  async ({ id, action }, { rejectWithValue }) => {
    try {
      await axiosInstance.put(`/tests?testId=${id}`, action);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const putSwitchRequest = createAsyncThunk(
  "test/putSwitchRequest",
  async ({ id, action }, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.put(`/tests/updateEnable?testId=${id}`, action);
      dispatch(getTestRequest());
      // return { id, isEnabled: action.isEnabled }; // Возвращаем необходимые данные
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTestRequest = createAsyncThunk(
  "test/deleteTestRequest",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/tests?testId=${id}`);
      dispatch(getTestRequest());
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getTestByIdRequest = createAsyncThunk(
  "test/getTestByIdRequest",
  async (testInfoId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/tests/getById?testId=${testInfoId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
