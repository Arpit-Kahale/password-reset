import axios from "axios";

const API = "https://password-reset-y3qu.onrender.com/api/auth";

export const forgotPassword = (email) => {
  return axios.post(`${API}/forgot-password`, { email });
};

export const resetPassword = (token, password) => {
  return axios.post(`${API}/reset-password/${token}`, { password });
};