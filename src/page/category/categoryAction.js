// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import {
  getCategories,
  saveCategory,
  deleteCategories,
} from "../../apis/categoriAPI.js";
import {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  deleteCatSuccess,
  requestFail,
} from "./CategorySlice";

export const addNewCategory = (formDt) => async (dispatch) => {
  // call api or reducer to update the state
  try {
    dispatch(requestPending());
    const result = await saveCategory(formDt);

    dispatch(addCategorySuccess(result));
    result.status === "success" && dispatch(fetchCategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await getCategories();
    console.log(result);
    dispatch(fetchAllCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export const removeCategories = (idArg) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await deleteCategories(idArg);
    console.log(result);
    dispatch(deleteCatSuccess(result));
    result.status === "success" && dispatch(fetchCategories());
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
