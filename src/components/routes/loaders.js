import API from "../../utils/axios/apiRoutes.js";
import { fetch } from "../../utils/axios/apiClient.js";

export async function vendorLoader({ params }) {
    return await fetch(`${API.vendors}/${params.id}`);
}

export async function vendorsLoader({ params }) {
    return await fetch(`${API.vendors}`);
}