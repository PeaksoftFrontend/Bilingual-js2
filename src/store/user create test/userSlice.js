import { createSlice } from "@reduxjs/toolkit";
import { testByIdRequest, userTestRequest } from "./userThunk";

export const userSlice = createSlice({
  name: "usertest",
  initialState: {
    userTest: [],
    testQuestions: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (bulder) => {
    bulder
      .addCase(userTestRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(userTestRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userTest = action.payload;
      })
      .addCase(userTestRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });

    bulder
      .addCase(testByIdRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(testByIdRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.testQuestions = action.payload;
      })
      .addCase(testByIdRequest.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const userReducer = userSlice.reducer;
