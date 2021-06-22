import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isAuthorised:false,
  loginResponse: {},
  user: {},
};

const loginSlice = createSlice({
  name: "editloginProduct",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised=true
      state.loginResponse = payload || {};
    },
    logOutSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised=false
  
    },
    updateLogin: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = true;
      state.loginResponse = payload || {};
    },
    UserProfile: (state, { payload }) => {
      state.isLoading = false;
      state.isAuthorised = true;
      state.user = payload || {};
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});
const { reducer, actions } = loginSlice;
export const { requestPending, loginSuccess,logOutSuccess,updateLogin,UserProfile, requestFail } = actions;
export default reducer;
