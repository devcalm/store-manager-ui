import css from "./styles.module.scss";
import classNames from "classnames";

export default function SubmitButton({ classBtn, sending, text = "Submit", sendingText = "Sending..." }) {
    return (
        <button
            className={classNames(css.btn, classBtn && css[classBtn])}
            type="submit"
        >
            {sending ? sendingText : text}
        </button>
    );
}