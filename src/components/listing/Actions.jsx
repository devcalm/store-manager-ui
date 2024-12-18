import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";
import DeleteConfirmation from "../ui/modals/DeleteConfirmation";
import css from "./styles.module.scss";
import classNames from "classnames";

export default function Actions({ edit, view, onDelete }) {
    const { openModal, closeModal } = useModal();

    function handleConfirmDelete() {
        openModal(
            <DeleteConfirmation
                onCancel={closeModal}
                onClick={() => {
                    onDelete();
                    closeModal();
                }}
            />
        );
    }

    return (
        <div>
            <Link to={view}>
                <span
                    className={classNames(css.actions, "material-symbols-outlined")}
                    data-action="view"
                >
                    visibility
                </span>
            </Link>
            <Link to={edit}>
                <span
                    className={classNames(css.actions, "material-symbols-outlined")}
                    data-action="edit"
                >
                    edit</span>
            </Link>
            <span
                className={classNames(css.actions, "material-symbols-outlined")}
                data-action="delete"
                onClick={handleConfirmDelete}
            >
                delete
            </span>
        </div>
    );
}