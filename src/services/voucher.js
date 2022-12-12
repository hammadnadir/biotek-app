import request from "./request";

export const getVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`public/api/expense`,payload)
      // request
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
      .get(`public/api/edit_expense?id=${payload}`, payload,{mode:'cors'})
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const viewVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`public/api/show_expense?id=${payload}`, payload,{mode:'cors'})
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};