import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { adminReducer } from "./admin create test/adminSlice";
import { userTableReducer } from "./user__result-table/userTableSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: adminReducer,
    user_table: userTableReducer,
  },
});
