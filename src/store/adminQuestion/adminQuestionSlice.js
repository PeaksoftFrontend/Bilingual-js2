import { createSlice } from "@reduxjs/toolkit";
import {
  deleteTestQuestionById,
  s3AudioPostRequest,
  updateTestQuestionById,
} from "./adminQuestionThunk";

const adminQuestionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    audioLink: "",
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(s3AudioPostRequest.fulfilled, (state, action) => {
        state.audioLink = action.payload.link;
        state.isLoading = false;
      })
      .addCase(s3AudioPostRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(s3AudioPostRequest.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      .addCase(deleteTestQuestionById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTestQuestionById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTestQuestionById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(updateTestQuestionById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTestQuestionById.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(updateTestQuestionById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const adminQuestionReducer = adminQuestionSlice.reducer;
