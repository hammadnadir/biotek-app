import axios from "axios";
// const baseURL = `${process.env.REACT_APP_BASE_URL_NEW}`;

export const getExpense = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://192.168.10.189:8000/api/add_expense?unit_expense=1`, payload)
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
      .post(`api/store_expense`, payload)
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
      .post(`api/update_expense`, payload)
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
      .post(`api/delete_expense`,payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};