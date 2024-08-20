// axiosConfig.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://3.72.63.179:8000/api", // Example base URL
//   headers: {
//     "Content-Type": "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY2MDgxNzMxLCJpYXQiOjE3MjI4ODE3MzEsImp0aSI6IjdiZWQ1NmVjMDgwOTQ4YTVhNGE3Mjk0YzdlY2RiZjZjIiwidXNlcl9pZCI6MSwibmFtZSI6IiIsInVzZXJuYW1lIjoiZWhhcHNhbXkifQ.G5yTMMhfdssAo5L4ACnQzDXTEK25UCIjlHdkDpiBnN4",
//   },
// });

// export default axiosInstance;


import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://54.93.53.203:8000/api", // Example base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the Authorization header with the token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // Retrieve the token from localStorage
  if (token) {
    console.log(token);
    
    config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
