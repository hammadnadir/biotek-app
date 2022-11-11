import axios from "axios";
const baseURL = `${process.env.REACT_APP_BASE_URL_NEW}`;

export const createExpense = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        reject(error.response.data.errors);
      });
  });
};