import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "category";

export const saveCategory = (formDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catApi, formDt);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const getCategory = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catApi);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
