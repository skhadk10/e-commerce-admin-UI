import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isAuthorised:false,
  loginResponse: {},
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

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});
const { reducer, actions } = loginSlice;
export const { requestPending, loginSuccess,logOutSuccess, requestFail } = actions;
export default reducer;
