import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "test",
  initialState: {
    tests: [],
  },
  reducers: {
    addTest: (state, action) => {
      state.tests.push(action.payload);
    },
    trueValid: (state, action) => {
      const isValid = state.tests.find((item) => item.id === action.payload);
      if (isValid) {
        isValid.isChecked = true;
      }
    },
    falseValid: (state, action) => {
      const isValid = state.tests.find((item) => item.id === action.payload);
      if (isValid) {
        isValid.isChecked = false;
      }
    },
    deleteTest: (state, action) => {
      state.tests = state.tests.filter((item) => item.id !== action.payload);
    },
    updateTest: (state, action) => {
      const test = state.tests.find((item) => item.id === action.payload.id);
      if (test) {
        test.title = action.payload.title;
        test.description = action.payload.description;
      }
    },
  },
});

export const { addTest, trueValid, falseValid, deleteTest, updateTest } =
  adminSlice.actions;
export const adminReducer = adminSlice.reducer;
