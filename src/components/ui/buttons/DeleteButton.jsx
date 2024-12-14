import css from "./styles.module.scss";
import classNames from "classnames";

export default function DeleteButton({onClick, classBtn, type="button" }) {
    if (type === 'icon') {
        return <i className="fa fa-trash" onClick={onClick} aria-hidden="true" />;
    } else {
        return <button
            type="button"
            className={classNames(css.btn, css.btnDanger, classBtn)}
            onClick={onClick}
        >
            Delete
        </button>
    }
};

