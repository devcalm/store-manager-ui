import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import PageContent from "../../../components/content/PageContent.jsx"
import VendorForm from "./VendorForm.jsx";
import Action from "../../../components/form/Action.js";
import API from "../../../utils/axios/apiRoutes.js";
import ROUTES from "../../../components/routes/routes.js";
import DeleteButton from "../../../components/ui/buttons/DeleteButton.jsx";
import DeleteConfirmation from "../../../components/ui/modals/DeleteConfirmation.jsx";
import { useModal } from "../../../context/ModalContext.jsx";

function VendorUpdatePage() {
    const { id } = useParams();
    const vendor = useLoaderData();
    const navigate = useNavigate();
    const { openModal, closeModal } = useModal();
    const title = `Update vendor: ${vendor.name}`;

    const handleUpdate = async (formData) => {
        const response = await Action.update(API.VENDOR_DETAIL(id), formData);
        navigate(ROUTES.VENDOR_DETAIL(response.id));
    };

    const handleDelete = async (formData) => {
        const response = await Action.remove(API.VENDOR_DETAIL(id), formData);
        navigate(ROUTES.VENDORS);
    };

    function handleConfirmDelete() {
        openModal(
            <DeleteConfirmation
                onCancel={closeModal}
                onClick={() => {
                    handleDelete();
                    closeModal();
                }}
            />
        );
    }

    return (
        <PageContent title={title}>
            <VendorForm
                initialValues={{ name: vendor.name, description: vendor.description }}
                onSubmit={handleUpdate}
                submitButtonClass="btnPrimary"
                deleteButton={<DeleteButton classBtn="ml-4" onClick={handleConfirmDelete} />}
            />
        </PageContent>
    );
}

export default VendorUpdatePage;