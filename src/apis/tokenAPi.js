import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const tokenAPIurl = rootUrl + "token";

export const tokenAPI = (token) => {
  return new Promise(async (resolve, reject) => {
    console.log("from token api", token);
    try {
      const { data } = await axios.get(tokenAPIurl, {
        headers: { Authorization: token },
      });
      console.log("from api result", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const getUserAPI = (token) => {
  console.log("from ")
  return new Promise(async (resolve, reject) => {
    console.log("from token api", token);
    try {
      const { data } = await axios.post(tokenAPIurl, token);
      console.log("from api result", data);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};