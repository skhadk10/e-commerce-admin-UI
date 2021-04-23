// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import {
  getProducts,
  saveProduct,
  productDelete,
  // deleteCategories,
  // updateCategories,
} from "../../apis/ProductAPI.js";
import {
  requestPending,
  addProductSuccess,
  fetchAllProductSuccess,
  deleteProdSuccess,
  // deleteCatSuccess,
  // updateCatSuccess,
  requestFail,
} from "./productSlice";

export const addNewProduct = (formDt) => async (dispatch) => {
  // call api or reducer to update the state
  try {
    dispatch(requestPending());
    const result = await saveProduct(formDt);

    dispatch(addProductSuccess(result));
    result.status === "success" && dispatch(fetchProduct());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const fetchProduct = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getProducts();
    console.log(result);
    dispatch(fetchAllProductSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const deleteProduct = (_id) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await productDelete(_id);
    console.log(result);
    dispatch(deleteProdSuccess(result));
    result.status === "success" && dispatch(fetchProduct());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

// export const updateNameCategories = (name) => async (dispatch) => {
//   try {
//     dispatch(requestPending());
//     const result = await updateCategories(name);
//     console.log(result);
//     dispatch(updateCatSuccess(result));
//     result.status === "success" && dispatch(fetchCategories());
//   } catch (error) {
//     const err = {
//       status: "error",
//       message: error.message,
//     };
//     dispatch(requestFail(err));
//   }
// };
