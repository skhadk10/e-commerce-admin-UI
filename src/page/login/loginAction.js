// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import { loginAPI } from "../../apis/loginAPI.js";

import { requestPending, loginSuccess, requestFail } from "./loginSlice.js";

//

export const sendLogin = (formData) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await loginAPI(formData); //return {status,message,user,tokenni}

    const { accessJWT, refreshJWT } = result;
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ourEcommerceRJWT", refreshJWT);
    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
