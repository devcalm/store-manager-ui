import { useLoaderData, useNavigate } from "react-router-dom"
import PageContent from "../../components/content/PageContent.jsx"
import VendorForm from "./VendorForm.jsx";
import Action from "../../components/form/Action.js";
import API from "../../utils/axios/apiRoutes.js";
import ROUTES from "../../components/routes/routes.js";

function VendorUpdatePage() {
    const vendor = useLoaderData();
    const navigate = useNavigate();
    const title = `Update vendor: ${vendor.name}`;

    const handleUpdate = async (formData) => {
        const response = await Action.update(API.vendors, formData);
        navigate(ROUTES.VENDOR_DETAIL(response.id));
    };

    return (
        <PageContent title={title}>
            <VendorForm
                initialValues={{ name: vendor.name, description: vendor.description }}
                onSubmit={handleUpdate} />
        </PageContent>
    );
}

export default VendorUpdatePage;