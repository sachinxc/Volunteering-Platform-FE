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
      if (error.response.status === 401 || error.response.status === 403) {
        // const router = useRouter();
        // Rstore.dispatch(logout())
        //   .then(() => {
        //     console.log(error.response, "errorhhtp");
        //     window.location.replace("/signin");
        //     // router.push(
        //     //   {
        //     //     pathname: "/signin",
        //     //     query: { name: "session" },
        //     //   },
        //     //   "/signin"
        //     // );
        //   })
        //   .catch(() => console.log("something went wrong"));
      }
    }

    return Promise.reject(error);
  }
);

export default http;
