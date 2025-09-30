import axios from "axios";

// there are no any local host in production
const BASE_URL= import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: BASE_URL,
});
export default api;