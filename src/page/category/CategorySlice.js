import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  status: "",
  message: "",
  categoryList: [],
  categoryItemDelete: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },

    addCategorySuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    fetchAllCategorySuccess: (state, { payload }) => {
      state.categoryList = payload.result;
      state.isLoading = false;
    },
    deleteCatSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
      if (payload.status === "success") state.deleteAllCategory = [];
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});
const { reducer, actions } = categorySlice;
export const {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
  deleteCatSuccess,
} = actions;
export default reducer;
