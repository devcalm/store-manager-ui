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
        if (error.response) {
            const { status } = error.response;
            if (status === 404) {
                throw new Error("The requested resource was not found.");
            }
            if (status >= 500) {
                throw new Error("A server error occurred. Please try again later.");
            }
        } else if (error.request) {
            throw new Error("Network error or request timeout. Please check your connection.");
        }
        throw new Error("An unexpected error occurred.");
    }
);

export const fetch = async (url, params) => {
    // Simulate a delay
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    // Wait for the delay
    // await delay(4000); // 1000ms = 1 second delay
    return await apiClient.get(url, { params });
}

export default apiClient;