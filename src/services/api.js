import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const loginUser = (payload) => API.post("/login", payload);

export const applyLeave = (payload) => API.post("/leaves", payload);

export const getLeaves = () => API.get("/leaves");

export const approveLeave = (id, status) => API.patch(`/leaves/${id}`, { status });