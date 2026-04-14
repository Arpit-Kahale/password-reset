import axios from "axios";

const API = axios.create({
  baseURL: "https://password-reset-y3qu.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export const forgotPassword = (email) => {
  return API.post("/forgot-password", { email });
};

export const resetPassword = (token, password) => {
  return API.post(`/reset-password/${token}`, { password });
};