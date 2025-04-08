import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5173";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default api;
