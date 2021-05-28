import axios from "axios";

const rootUrl = "http://localhost:8001/api/v1/";
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
export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catApi);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const deleteCategories = (idArg) => {
  console.log(idArg);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(catApi, { data: idArg });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateCategories = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(catApi, { name });
      resolve(resolve);
    } catch (error) {
      reject(error);
    }
  });
};
