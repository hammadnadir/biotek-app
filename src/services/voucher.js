import request from "./request";

export const getVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`expense`,payload)
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
      .get(`edit_expense/?id=${payload}`, payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};