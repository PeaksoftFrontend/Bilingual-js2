import { createSlice } from "@reduxjs/toolkit";
import { STORAGE_KEY } from "../../../utils/constants/auth";
import { signInRequest, signUpRequest } from "../../thunks/authThunk";

const getInitialState = () => {
  const json = localStorage.getItem(STORAGE_KEY.BILINGUAL_STORAGE_KEY);

  if (json) {
    const userData = JSON.parse(json);

    return {
      isAuth: true,
      role: userData.role,
      token: userData.token,
      id: userData.id,
      openSignIn: false,
      openSignUp: false,
    };
  }

  return {
    role: "GUEST",
    isAuth: false,
    isLoading: false,
    token: null,
    isError: null,
    openSignIn: false,
    openSignUp: false,
  };
};

export const initialState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },

    logOut: (state) => {
      state.role = "GUEST";
      state.isAuth = false;
      state.token = null;
      state.id = null;
      state.isLoading = false;
      state.openSignIn = false;
      state.openSignUp = false;

      localStorage.removeItem(STORAGE_KEY.BILINGUAL_STORAGE_KEY);
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
  extraReducers: (builder) => {
    builder
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.isAuth = true;
        state.isError = null;
        state.isLoading = false;
      })
      .addCase(signInRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signInRequest.rejected, (state, action) => {
        state.isAuth = false;
        state.isError = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.id = action.payload.id;
        state.isAuth = true;
        state.isError = null;
        state.isLoading = false;
      })
      .addCase(signUpRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.isAuth = false;
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setRole, logOut, openSignInModal, openSignUpModal, closeModal } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
