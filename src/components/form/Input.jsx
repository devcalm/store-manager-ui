import css from "./styles.module.scss";

export default function Input({
    id,
    name,
    label,
    value,
    onChange,
    onBlur,
    validationState = {},
    rules,
    ...props
}) {
    const { error, wasValidating } = validationState;

    const dataValidation = wasValidating
        ? (error ? "error" : "success")
        : undefined;

    return (
        <div className="col">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
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