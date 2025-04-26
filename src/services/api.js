import axios from "axios";

const API = axios.create({
  baseURL: "https://nestora-hr-backend-production.up.railway.app/api",
});

// Attach token automatically on every request
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

// Auth
export const loginUser = (payload) => API.post("/auth/login", payload);
export const signupUser = (payload) => API.post("/auth/signup", payload);
// Leaves
export const applyLeave = (payload) => API.post("/leaves/apply", payload);
export const getMyLeaves = () => API.get("/leaves/my");
export const getAllLeaves = () => API.get("/leaves");
export const approveLeave = (id, status) =>
  API.patch(`/leaves/${id}`, { status });

export default API;
