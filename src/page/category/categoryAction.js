import { saveCategory } from "../../apis/categoriAPI.js";
import {
  requestPending,
  addCategorySuccess,
  fetchAllCategorySuccess,
  requestFail,
} from "./CategorySlice";

const addNewCategory = (formDt) => async (dispatch) => {
  // call api or reducer to update the state
  try {
    dispatch(requestPending());
    const result = await saveCategory(formDt);
    console.log(result);
    dispatch(addCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
export default addNewCategory;
