import request from "./request";

export const getExpense = (payload) => {
  return new Promise((resolve, reject) => {
    request
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
    request
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
    request
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
    request
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
    request
      .post(`close_form`,payload)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};