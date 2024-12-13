import Input from "../../components/form/Input.jsx";
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import { useFormSubmit } from "../../hooks/useFormSubmit.jsx";
import css from "../../components/form/styles.module.scss";
import RequiredRule from "../../components/form/validation/RequiredRule.js"
import MaxLengthRule from "../../components/form/validation/MaxLengthRule.js"
import MinLengthRule from "../../components/form/validation/MinLengthRule.js"

export default function VendorForm({
    initialValues = { name: "", description: "" },
    onSubmit
}) {
    const { formState, validateForm, validateField, handleChange } = useFormValidation({
        name: {
            initialValue: initialValues.name,
            rules: [
                new RequiredRule(),
                new MinLengthRule({ "value": 2 }),
                new MaxLengthRule({ "value": 255 })
            ],
        },
        description: {
            initialValue: initialValues.description,
            rules: [
                new RequiredRule()
            ]
        }
    });

    const formSubmitHandler = async (formData) => {
        if (validateForm() && onSubmit) {
            await onSubmit(formData);
        }
    };

    const { handleSubmit, sending } = useFormSubmit(formSubmitHandler);

    return (
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <div className="row">
                <Input
                    name="name"
                    value={formState.name.value}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => validateField("name")}
                    placeholder="Enter Vendor's name"
                    validationState={{
                        error: formState.name.error,
                        wasValidating: formState.name.wasValidating
                    }}
                />
                <Input
                    name="description"
                    placeholder="Enter Vendor's description"
                    value={formState.description.value}
                    onChange={(e) => handleChange("description", e.target.value)}
                    onBlur={() => validateField("description")}
                    validationState={{
                        error: formState.description.error,
                        wasValidating: formState.description.wasValidating
                    }}
                />
                <div className="col">
                    <button className={`${css.btn} ${css.btnPrimary}`} type="submit" disabled={sending}>
                        {sending ? "Sending..." : "Submit"}
                    </button>
                </div>
            </div>
        </form>
    );
}
