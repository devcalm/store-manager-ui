import { useLoaderData, Link, useNavigate } from "react-router-dom"
import PageContent from "../../../components/content/PageContent.jsx"
import ROUTES from "../../../components/routes/routes.js";
import Button from "../../../components/ui/buttons/Button.jsx";
import DeleteButton from "../../../components/ui/buttons/DeleteButton.jsx";
import DeleteConfirmation from "../../../components/ui/modals/DeleteConfirmation.jsx";
import { useModal } from "../../../context/ModalContext.jsx";

export default function VendorViewPage() {
    const { id, name, description } = useLoaderData();
    const { openModal, closeModal } = useModal();
    const navigate = useNavigate();
    const vendor = useLoaderData();

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
        <PageContent title={name}>
            <div className="row">
                <div className="col-md-6">Name</div>
                <div className="col-md-6">{name}</div>
                <div className="col-md-6">Description</div>
                <div className="col-md-6">{description}</div>
                <div className="col">
                    <Link to={ROUTES.VENDOR_EDIT(id)}>
                        <Button text="Update" classBtn="btnPrimary" />
                    </Link>
                    <DeleteButton classBtn="ml-4" onClick={handleConfirmDelete} />
                </div>
            </div>
        </PageContent>
    );
}