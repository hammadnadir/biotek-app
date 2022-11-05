import axios from "axios";
import { baseURL } from "./request";

export const login = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}user/login`, payload)
      .then((response) => {
        console.log(response);
        let authHeader = response.session_id["authorization"];
        let token = authHeader.substring(7, authHeader.length);
        localStorage.setItem("biztek_token", token);
        localStorage.setItem("currentUser", JSON.stringify(response));
        console.log(response.data);

        // let refreshHeader = response.headers['refresh'];
        // let refreshToken = refreshHeader.substring(7, refreshHeader.length);
        // localStorage.setItem('wcr_refres_token', refreshToken);
        resolve(response);
      })
      .catch((error) => {
        console.log("error", error);
        // reject(error.response.data.errors);
      });
  });
};

export const logout = (payload) => {
  // console.log("payload", payload);
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}auth/logout`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("biztek_token") },
      })
      .then(() => {
        localStorage.setItem("biztek_token", "");
        localStorage.setItem("currentUser", "");
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUp = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}auth/signup`, payload)
      .then((response) => {
        // resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const forgotPassword = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}password/reset${payload?.token ? "/" + payload.token : ""}`, payload)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const changePassword = (payload) => {
  const { oldPassword, newPassword } = payload;
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseURL}password/reset/token`, { oldPassword, newPassword })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};