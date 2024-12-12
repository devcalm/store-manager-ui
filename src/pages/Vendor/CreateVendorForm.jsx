import Input from "../../components/form/Input.jsx";
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import { useFormSubmit } from "../../hooks/useFormSubmit.jsx";
import { useNavigate } from "react-router-dom";
import css from "../../components/form/styles.module.scss";
import RequiredRule from "../../components/form/validation/RequiredRule.js"
import MaxLengthRule from "../../components/form/validation/MaxLengthRule.js"
import MinLengthRule from "../../components/form/validation/MinLengthRule.js"
import Action from "../../components/form/Action.js";
import API from "../../utils/axios/apiRoutes.js";

export default function CreateVendorForm() {
    const navigate = useNavigate();
    const { formState, validateForm, validateField, handleChange } = useFormValidation({
        name: {
            initialValue: "",
            rules: [
                new RequiredRule(),
                new MinLengthRule({ "value": 2 }),
                new MaxLengthRule({ "value": 255 })
            ],
        },
        description: {
            initialValue: "",
            rules: [
                new RequiredRule()
            ]
        }
    });

    const formSubmitHandler = async (formData) => {
        if (validateForm()) {
            Action.create(API.vendors, formData, navigate);
        }
    };

    const { handleSubmit, sending } = useFormSubmit(formSubmitHandler);

    return (
        <form onSubmit={handleSubmit} className={`${css.form_container} row`}>
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
                <button className={`${css.btn} ${css.btn_primary}`} type="submit" disabled={sending}>
                    {sending ? "Sending..." : "Submit"}
                </button>
            </div>
        </form>
    );
}
