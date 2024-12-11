import { createSlice } from "@reduxjs/toolkit";
import { userTestGetByIdRequest, userTestGetRequest } from "./userTestThunk";

const userTestSlice = createSlice({
  name: "userTest",
  initialState: {
    userTest: [],
    userTestById: [],
    isLoading: false,
    userAnswer: [],
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
  },
});

export const { userAnswerHandler } = userTestSlice.actions;
export const userTestReducer = userTestSlice.reducer;
