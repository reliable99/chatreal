import axios from "axios";

export const axiousInstance  = axios.create({
    baseURL: "http://localhost:5002/api",
    withCredentials: true
})