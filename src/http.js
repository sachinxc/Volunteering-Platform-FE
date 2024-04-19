"use client";
import axios from "axios";

const url = process.env.REACT_APP_API_PATH;

const http = axios.create({
  baseURL: `${url}/api/`,
  headers: {
    "Content-type": "application/json",
  },
});

http.interceptors.request.use((config) => {
  // const token = Cookies.get("token");
  // config.headers = config.headers || {};
  // config.headers["x-access-token"] = token;

  return config;
});

http.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("viewEvent");
        window.location.href = "/signin";
      }
    }

    return Promise.reject(error);
  }
);

export default http;
