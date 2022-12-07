import axios from "axios";

export const getVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`public/app/api/expense`,payload)
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
    axios
      .get(`public/app/api/edit_expense/?id=${payload}`, payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};