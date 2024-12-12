import apiClient from "../../utils/axios/apiClient.js";

class Action {

    static async create(url, formData, navigate) {
        const response = await apiClient.post(url, Object.fromEntries(formData));
        const { id } = response;
        if (id) {
            navigate(`${url}/${id}`);
        }
    }

    static async update(url, formData, navigate) {
        const response = await apiClient.put(url, Object.fromEntries(formData));
        const { id } = response;
        if (id) {
            navigate(`${url}`);
        }
    }

    static async remove(url, navigate) {
        const response = await apiClient.delete(url);
        const indexUrl = url.slice(0, url.lastIndexOf('/'));
        navigate(indexUrl);
    }
}

export default Action;
