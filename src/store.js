import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./page/category/CategorySlice.js";
const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
export default store;
