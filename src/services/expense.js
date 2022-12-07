// import request from "./request";

import axios from "axios";

export const getExpense = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`public/app/api/add_expense?unit_expense=1`,payload)
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

export const createExpense = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`public/app/api/store_expense`, payload)
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
    axios
      .post(`public/app/api/update_expense`, payload)
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
    axios
      .post(`public/app/api/delete_expense`,payload)
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
    axios
      .post(`public/app/api/close_form`,payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};