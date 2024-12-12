import axios from "axios";
import config from "../../config.js";

const apiClient = axios.create({
    baseURL: config.serverURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

export default apiClient;