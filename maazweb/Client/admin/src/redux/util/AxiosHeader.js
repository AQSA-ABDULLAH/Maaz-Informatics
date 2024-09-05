import axios from "axios";
import { jwtDecode as jwt_decode } from "jwt-decode"; // Import the jwtDecode named export as jwt_decode

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // This is your backend API
  headers: {
    "Content-Type": "application/json",
  },
}); 

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.headers.withoutAuth) {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    delete config.headers.withoutAuth;

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  },
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      window.location.href = "/login";
      return;
    }
    return Promise.reject(error);
  }
);

// Function to get user ID from token
const getUserIdFromToken = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    const decodedToken = jwt_decode(token);
    return decodedToken.userId;
  }
  return null;
};

export { axiosInstance, getUserIdFromToken };

