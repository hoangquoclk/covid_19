import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://disease.sh",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosConfig;
