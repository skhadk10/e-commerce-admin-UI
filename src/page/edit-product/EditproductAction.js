// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import { getAProduct, updateProduct } from "../../apis/ProductAPI.js";
import {
  requestPending,
  fetchProductSuccess,
  updateProductSucess,
  requestFail,
} from "./selectedProductSlice.js";

// export const addNewProduct = (formDt) => async (dispatch) => {
//   // call api or reducer to update the state
//   try {
//     dispatch(requestPending());
//     const result = await saveProduct(formDt);

//     dispatch(addProductSuccess(result));
//     result.status === "success" && dispatch(fetchProduct());
//   } catch (error) {
//     const err = {
//       status: "error",
//       message: error.message,
//     };
//     dispatch(requestFail(err));
//   }
// };

export const fetchAProduct = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getAProduct(_id);
    console.log(result);
    dispatch(fetchProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

// UPdate product in Edit product form
export const updateAProduct = (formDt) => async (dispatch) => {
  console.log(formDt);
  try {
    dispatch(requestPending());
    const result = await updateProduct(formDt);
    console.log(result);
    dispatch(updateProductSucess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
