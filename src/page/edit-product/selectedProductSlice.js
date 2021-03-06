import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  message: "",
  product: {},
};

const selectedProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    fetchProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.product = payload.result || {};
    },
    updateProductSucess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = selectedProductSlice;
export const {
  requestPending,
  fetchProductSuccess,
  updateProductSucess,
  requestFail,
} = actions;
export default reducer;
