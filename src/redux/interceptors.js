import { history } from "./history";

export const requestInterceptor = async (config) => {
  try {
    config.headers.common.Authorization = "Bearer " + localStorage.getItem("biztek_token");
  } catch (e) {
    console.log(e);
  }
  return config;
};

export const errorInterceptor = (error) => {
  if (error.message === "Network Error") {
    return Promise.reject({
      message: "Something went wrong, we are looking into that.",
      code: 500,
    });
  }
  if (error.response) {
    if (
      error.response.status === 401 &&
      error.response.config &&
      !error.response.config.__isRetryRequest // eslint-disable-line no-underscore-dangle
    ) {
      console.log(error.response.data);
      localStorage.setItem("biztek_token", "");
      history.replace("/login");
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};
