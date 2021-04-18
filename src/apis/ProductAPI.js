import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const ProdAPI = rootUrl + "product";

export const saveProduct = (formDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(ProdAPI, formDt);

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(ProdAPI);
      console.log(data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
export const productDelete = (_id) => {
  console.log(_id);
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.delete(ProdAPI, { data: { _id } });

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateCategories = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.patch(ProdAPI, { name });
      resolve(resolve);
    } catch (error) {
      reject(error);
    }
  });
};
export const getAProduct = (_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(ProdAPI + "/" + _id);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};