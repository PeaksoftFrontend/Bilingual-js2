import { createSlice } from "@reduxjs/toolkit";
import { getTestRequest, putSwitchRequest } from "./adminCreatetestThunk";

const adminSlice = createSlice({
  name: "test",
  initialState: {
    tests: [],
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
  },
});

export const adminReducer = adminSlice.reducer;
