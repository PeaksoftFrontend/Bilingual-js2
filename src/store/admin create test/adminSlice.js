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
  // reducers: {
  //   addTest: (state, action) => {
  //     state.tests.push(action.payload);
  //   },
  //   trueValid: (state, action) => {
  //     const isValid = state.tests.find((item) => item.id === action.payload);
  //     if (isValid) {
  //       isValid.isChecked = true;
  //     }
  //   },
  //   falseValid: (state, action) => {
  //     const isValid = state.tests.find((item) => item.id === action.payload);
  //     if (isValid) {
  //       isValid.isChecked = false;
  //     }
  //   },
  //   deleteTest: (state, action) => {
  //     state.tests = state.tests.filter((item) => item.id !== action.payload);
  //   },
  //   updateTest: (state, action) => {
  //     const test = state.tests.find((item) => item.id === action.payload.id);
  //     if (test) {
  //       test.title = action.payload.title;
  //       test.description = action.payload.description;
  //     }
  //   },
  // },
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

// export const { addTest, trueValid, falseValid, deleteTest, updateTest } =
//   adminSlice.actions;
export const adminReducer = adminSlice.reducer;
