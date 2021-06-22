// import { deleteCategory } from "../../e-commerance-api/model/category/Category.model.js";
import { loginAPI } from "../../apis/loginAPI.js";
import { LogOutApi } from "../../apis/LogOut.js";
import { tokenAPI,getUserAPI } from "../../apis/tokenAPi.js";

import { requestPending, loginSuccess, requestFail, logOutSuccess,updateLogin, UserProfile } from "./loginSlice.js";

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

export const userAutoLogin = () => async (dispatch) => {
  console.log("from userAuto login");
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("ourEcommerceRJWT");

  accessJWT && dispatch(updateLogin());

  if (!refreshJWT) {
    dispatch(logOutSuccess());
  }

  if (!accessJWT && refreshJWT) {
    //call the server to get new access token
    const result = await tokenAPI(refreshJWT);
    console.log(result);

    if (result.status === "success") {
      sessionStorage.setItem("accessJWT", result.accessJwt);
      dispatch(updateLogin());
    }
  }

  const userDetails = await getUserAPI(refreshJWT);
  userDetails==="success" && dispatch(UserProfile(userDetails));
};