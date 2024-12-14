import Button from "../buttons/Button";
import DeleteButton from "../buttons/DeleteButton";
import css from "./styles.module.scss";
import closeImg from "../../../assets/images/close.svg";

export default function DeleteConfirmation({ onCancel, onClick }) {
    return (
        <>
            <div className={css.modalHeader}>
                <h5 className={css.modalTitle}>Are you sure?</h5>
                <img src={closeImg} className={css.closeIcon} onClick={onCancel} alt="Close" />
            </div>
            <div className={css.modalBody}>
                <p>Do you really want to remove this item?</p>
            </div>
            <div className={css.modalFooter}>
                <Button classBtn="btnSecondary" text="Close" onClick={onCancel} />
                <DeleteButton onClick={onClick} />
            </div>
        </>
    );
}