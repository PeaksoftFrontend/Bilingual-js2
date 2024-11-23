import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: "ADMIN",
    isAuth: false,
    isLoading: false,
    token: null,
    isError: null,
    openSignIn: false,
    openSignUp: false,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    openSignInModal: (state) => {
      state.openSignIn = true;
      state.openSignUp = false;
    },

    closeModal: (state) => {
      state.openSignIn = false;
      state.openSignUp = false;
    },

    openSignUpModal: (state) => {
      state.openSignUp = true;
      state.openSignIn = false;
    },
  },
  extraReducers: () => {},
});

export const { setRole, openSignInModal, closeModal, openSignUpModal } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
