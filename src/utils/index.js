// const host = window.location.origin;

export const isLoggedIn = () => {
    try {
      if (localStorage.getItem("biztek_token") !== "" && localStorage.getItem("biztek_token") !== null) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  };
  
  export const getToken = () => {
    try {
      if (localStorage.getItem("biztek_token") !== "" && localStorage.getItem("biztek_token") !== null) {
        return localStorage.getItem("biztek_token");
      }
      return false;
    } catch (e) {
      return false;
    }
  };
  
  export const getCurrentUser = () => {
    try {
      if (localStorage.getItem("currentUser") !== "") {
        return JSON.parse(localStorage.getItem("currentUser")).data;
      }
      return null;
    } catch (e) {
      return null;
    }
  };
  
  export const decodeJWT = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  
  export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };