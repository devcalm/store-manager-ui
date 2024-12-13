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
            <label className={css.formLabel} htmlFor={name}>
                {`${name[0].toUpperCase()}${name.slice(1)}`}
            </label>
            <input
                id={name}
                name={name}
                className={css.formControl}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                data-validation={dataValidation}
                {...props}
            />
            <div
                className={`${css.invalidFeedback} ${error ? "showElement" : undefined
                    }`}
            >
                {error}
            </div>
        </div>
    );
}