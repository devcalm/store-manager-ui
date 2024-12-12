import css from "./styles.module.scss";

export default function Input({
    name,
    value,
    onChange,
    onBlur,
    validationState = {},
    ...props
}) {
    const { error, wasValidating } = validationState;

    const dataValidation = wasValidating
        ? (error ? "error" : "success")
        : undefined;

    return (
        <div className="col">
            <label htmlFor={name}>{`${name[0].toUpperCase()}${name.slice(1)}`}</label>
            <input
                id={name}
                name={name}
                className={css.form_control}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                data-validation={dataValidation}
                {...props}
            />
            <div
                className={`${css.invalid_feedback} ${error ? "show_element" : undefined
                    }`}
            >
                {error}
            </div>
        </div>
    );
}