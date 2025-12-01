import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "192.168.0.103/api",
    timeout: 5000,

})