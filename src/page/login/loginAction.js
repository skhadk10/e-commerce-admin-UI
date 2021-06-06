// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import { loginAPI } from "../../apis/loginAPI.js";
import { LogOutApi } from "../../apis/LogOut.js";

import { requestPending, loginSuccess, requestFail, logOutSuccess } from "./loginSlice.js";

//

export const sendLogin = (formData) => async (dispatch) => {
  
  try {
    dispatch(requestPending());
    const result = await loginAPI(formData); //return {status,message,user,tokenni}
    console.log("from action",result);
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
export const LogOut = (_id) => async (dispatch) => {
  
  try {
    dispatch(requestPending());
    sessionStorage.removeItem("accessJWT" );
    localStorage.removeItem("ourEcommerceRJWT");
    const result = await LogOutApi(_id); //return {status,message,user,tokenni}
    console.log("from action",result);
   

    dispatch(logOutSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
