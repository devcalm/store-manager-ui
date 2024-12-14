import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from "./styles.module.scss";

export default function Modal({open, children, onClose}) {
    const dialog = useRef();
    useEffect(() => {
        if (open) {
            dialog.current.showModal();
            dialog.current.focus();
        } else {
            dialog.current.close();
            document.activeElement.blur();
        }
    }, [open]);

    return createPortal(
        <dialog className={css.modal} ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById("modal")
    );

}