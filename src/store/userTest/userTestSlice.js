import { createSlice } from "@reduxjs/toolkit";
import {
  s3AudioPostRequest,
  userTestGetByIdRequest,
  userTestGetRequest,
} from "./userTestThunk";
import { userAnswerPostRequest } from "./userTestThunk";

const userTestSlice = createSlice({
  name: "userTest",
  initialState: {
    userTest: [],
    userTestById: [],
    isLoading: false,
    userAnswer: [],
    audioUrl: "",
  },
  reducers: {
    userAnswerHandler: (state, action) => {
      state.userAnswer.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(userTestGetRequest.fulfilled, (state, action) => {
        state.userTest = action.payload;
        state.isLoading = false;
      })
      .addCase(userTestGetRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userTestGetRequest.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(userTestGetByIdRequest.fulfilled, (state, action) => {
        state.userTestById = action.payload;
        state.isLoading = false;
      })
      .addCase(userTestGetByIdRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userTestGetByIdRequest.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(s3AudioPostRequest.fulfilled, (state, action) => {
        state.audioUrl = action.payload;
        state.isLoading = false;
      })
      .addCase(s3AudioPostRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(s3AudioPostRequest.rejected, (state) => {
        state.isLoading = true;
      });
    builder
      .addCase(userAnswerPostRequest.fulfilled, (state) => {
        state.isLoading = false;
        state.userAnswer = [];
      })
      .addCase(userAnswerPostRequest.rejected, (state) => {
        state.isLoading = false;
        state.userAnswer = [];
      });
  },
});

export const { userAnswerHandler } = userTestSlice.actions;
export const userTestReducer = userTestSlice.reducer;
