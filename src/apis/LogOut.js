import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
const catApi = rootUrl + "logOut";

export const LogOutApi = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catApi, _id);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
