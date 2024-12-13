import apiClient from "../../utils/axios/apiClient.js";

class Action {

    static async create(url, formData) {
        return await apiClient.post(url, Object.fromEntries(formData));
    }

    static async update(url, formData) {
        return await apiClient.put(url, Object.fromEntries(formData));
    }

    static async remove(url) {
        return await apiClient.delete(url);
    }
}

export default Action;
