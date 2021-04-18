// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import { getAProduct } from "../../apis/ProductAPI.js";
import {
  requestPending,
  fetchProductSuccess,
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

export const fetchProduct = (_id) => async (dispatch) => {
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
