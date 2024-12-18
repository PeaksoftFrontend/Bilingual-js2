import { createSlice } from "@reduxjs/toolkit";
import {
  getTestByIdRequest,
  getTestRequest,
  putSwitchRequest,
} from "./adminCreatetestThunk";

const adminSlice = createSlice({
  name: "test",
  initialState: {
    tests: [],
    testsById: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getTestRequest.fulfilled, (state, action) => {
      state.tests = action.payload;
    });
    builder.addCase(putSwitchRequest.fulfilled, (state, action) => {
      const { id, isEnabled } = action.payload;
      const test = state.tests.find((item) => item.id === id);
      if (test) {
        test.isChecked = isEnabled;
      }
    });
    builder.addCase(putSwitchRequest.rejected, (state, action) => {
      state.error = action.payload;
    });
    // Test get by ID
    builder
      .addCase(getTestByIdRequest.fulfilled, (state, action) => {
        state.testsById = action.payload;
      })
      .addCase(getTestByIdRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTestByIdRequest.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const adminReducer = adminSlice.reducer;
