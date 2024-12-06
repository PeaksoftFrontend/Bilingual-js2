import { createSlice } from "@reduxjs/toolkit";
import { s3AudioPostRequest } from "./adminQuestionThunk";

const adminQuestionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    audioLink: "",
    isLoading: false,
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
  },
});

export const adminQuestionReducer = adminQuestionSlice.reducer;
