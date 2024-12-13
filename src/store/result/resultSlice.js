import { createSlice } from "@reduxjs/toolkit";
import {
  getAllUserResultAnswer,
  getQuestionsResultsById,
  getResultUserById,
} from "./resultThunk";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    result: [],
    isLoading: false,
    resultById: {},
    resultQuestion: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getResultUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resultById = action.payload;
      })
      .addCase(getResultUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResultUserById.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(getAllUserResultAnswer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload;
      })
      .addCase(getAllUserResultAnswer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUserResultAnswer.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(getQuestionsResultsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resultQuestion = action.payload;
      })
      .addCase(getQuestionsResultsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuestionsResultsById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const resultReducer = resultSlice.reducer;
