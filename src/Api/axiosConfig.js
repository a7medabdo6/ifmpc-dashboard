// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.72.63.179:8000/api", // Example base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
