import axios from "axios";
import request from "./request";
const baseURL = `${process.env.REACT_APP_BASE_URL_NEW}`;

export const getVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`api/expense`,payload)
      // axios
      // .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error.response.data.errors);
      });
  });
};

export const editVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`api/edit_expense/?id=${payload}`, payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};