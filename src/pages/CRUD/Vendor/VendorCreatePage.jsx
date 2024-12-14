import PageContent from "../../../components/content/PageContent.jsx";
import VendorForm from "./VendorForm.jsx";
import Action from "../../../components/form/Action.js";
import API from "../../../utils/axios/apiRoutes.js";
import ROUTES from "../../../components/routes/routes.js";
import { useNavigate } from "react-router-dom";

export default function VendorCreatePage() {
    const navigate = useNavigate();

    const handleCreate = async (formData) => {
        const response = await Action.create(API.VENDOR, formData);
        navigate(ROUTES.VENDOR_DETAIL(response.id));
    };

    return (
        <PageContent title="Create new vendor">
            <VendorForm
                initialValues={{ name: "", description: "" }}
                onSubmit={handleCreate}
                submitButtonClass="btnSuccess"
            />
        </PageContent>
    );
}
