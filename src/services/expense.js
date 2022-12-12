// import request from "./request";

import request from "./request";


export const getExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .get(`public/api/add_expense?unit_expense=1`,payload)
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

export const createExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .post(`public/api/store_expense`, payload ,{mode:'cors'})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error.response.data.errors);
      });
  });
};

export const editExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .post(`public/api/update_expense`, payload,{mode:'cors'})
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .post(`public/api/delete_expense`,payload,{mode:'cors'})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const clearExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
      .post(`public/api/close_form`,payload,{mode:'cors'})
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};