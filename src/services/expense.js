import axios from "axios";
const baseURL = `${process.env.REACT_APP_BASE_URL_NEW}`;

export const createExpense = (payload) => {
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