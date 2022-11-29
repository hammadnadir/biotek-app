import axios from "axios";
// const baseURL = `${process.env.REACT_APP_BASE_URL_NEW}`;

export const getVoucher = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://192.168.10.189:8000/api/expense`)
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
      .get(`api/edit_expense/?id=${payload}`, payload)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};