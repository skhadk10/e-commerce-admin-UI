import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  message: "",
  deleteMsg: "",

  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    addProductSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    fetchAllProductSuccess: (state, { payload }) => {
      state.productList = payload.result;
      state.isLoading = false;
    },
    deleteProdSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.deleteMsg = payload.message;
    },

    // updateCatSuccess: (state, { payload }) => {
    //   state.isPending = false;
    //   state.status = payload.status;
    //   state.message = payload.message;
    // },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = productSlice;
export const {
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
  requestFail,
  deleteProdSuccess,
  // deleteCatSuccess,
  // updateCatSuccess,
} = actions;
export default reducer;
