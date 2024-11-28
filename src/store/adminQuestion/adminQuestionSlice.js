import { createSlice } from "@reduxjs/toolkit";

const adminQuestionSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {},
});

export const adminReducer = adminQuestionSlice.reducer;
