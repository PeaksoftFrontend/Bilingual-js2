import { createSlice } from "@reduxjs/toolkit";
import { getUserResults } from "./userTableThunk";

const userTableSlice = createSlice({
  name: "user_table",
  initialState: {
    user_table: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getUserResults.fulfilled, (state, action) => {
      state.user_table = action.payload;
    });
  },
});
export const userTableReducer = userTableSlice.reducer;
