import { useLoaderData, useNavigate, useParams } from "react-router-dom"
import PageContent from "../../../components/content/PageContent.jsx"
import VendorForm from "./VendorForm.jsx";
import Action from "../../../components/form/Action.js";
import API from "../../../utils/axios/apiRoutes.js";
import ROUTES from "../../../components/routes/routes.js";
import DeleteButton from "../../../components/ui/buttons/DeleteButton.jsx";
import { useState } from "react";
import Modal from "../../../components/ui/modals/Modal.jsx";
import DeleteConfirmation from "../../../components/ui/modals/DeleteConfirmation.jsx";

function VendorUpdatePage() {
    const { id } = useParams();
    const vendor = useLoaderData();
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false)
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
        setModalIsOpen(true);
    }

    function handleRejectDelete() {
        setModalIsOpen(false);
    }

    return (
        <PageContent title={title}>
            <VendorForm
                initialValues={{ name: vendor.name, description: vendor.description }}
                onSubmit={handleUpdate}
                submitButtonClass="btnPrimary"
                deleteButton={<DeleteButton classBtn="ml-4" onClick={handleConfirmDelete} />}
            />
            <Modal open={modalIsOpen} onClose={handleRejectDelete}>
                <DeleteConfirmation onClick={handleDelete} onCancel={handleRejectDelete} />
            </Modal>
        </PageContent>
    );
}

export default VendorUpdatePage;