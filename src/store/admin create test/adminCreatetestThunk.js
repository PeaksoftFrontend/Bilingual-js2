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
export const questionEnablePutRequest = createAsyncThunk(
  "test/questionEnablePutRequest",
  async (
    { testQuestionId, testInfoId, enable },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axiosInstance.put(
        `/questions/updateEnable?questionId=${testQuestionId}`,
        JSON.stringify(enable),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatch(getTestByIdRequest(testInfoId));
      return response.data;
    } catch (error) {
      console.error("Error: ", error.response || error.message);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
