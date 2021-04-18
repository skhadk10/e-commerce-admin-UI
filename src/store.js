import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./page/category/CategorySlice.js";
import productReducer from "./page/product/productSlice.js";
import SelectedProductReducer from "./page/edit-product/selectedProductSlice.js";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    selectedProduct: SelectedProductReducer,
  },
});
export default store;
