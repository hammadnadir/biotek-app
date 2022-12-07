// import request from "./request";

import axios from "axios";

export const getExpense = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`add_expense?unit_expense=1`,payload)
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
      .post(`store_expense`, payload)
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
      .post(`update_expense`, payload)
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
      .post(`delete_expense`,payload)
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
      .post(`close_form`,payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};