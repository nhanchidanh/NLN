import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//trc khi gui data len server se chay qua interceptors
export default instance;
