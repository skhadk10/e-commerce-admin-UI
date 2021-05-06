import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./page/category/CategorySlice.js";
import productReducer from "./page/product/productSlice.js";
import SelectedProductReducer from "./page/edit-product/selectedProductSlice.js";
import loginReducer from "./page/login/loginSlice.js";
const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    selectedProduct: SelectedProductReducer,
    login: loginReducer,
  },
});
export default store;
