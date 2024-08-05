// axiosConfig.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.72.63.179:8000/api", // Example base URL
  headers: {
    "Content-Type": "application/json",
    jwtAuth:
      "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2MDgxNzMxLCJpYXQiOjE3MjI4ODE3MzEsImp0aSI6IjdiZWQ1NmVjMDgwOTQ4YTVhNGE3Mjk0YzdlY2RiZjZjIiwidXNlcl9pZCI6MSwibmFtZSI6IiIsInVzZXJuYW1lIjoiZWhhcHNhbXkifQ.G5yTMMhfdssAo5L4ACnQzDXTEK25UCIjlHdkDpiBnN4",
  },
});

export default axiosInstance;
