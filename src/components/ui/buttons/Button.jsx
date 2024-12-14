import classNames from "classnames";
import css from "./styles.module.scss";

export default function Button({ text, classBtn, onClick }) {
    return (
        <button type="button"
            className={classNames(css.btn, classBtn && css[classBtn])}
            onClick={onClick}
        >
            {text}
        </button>
    );
}