import Input from "../../components/form/Input.jsx";
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import css from "../../components/form/styles.module.scss";
import RequiredRule from "../../components/form/validation/RequiredRule.js"
import MaxLengthRule from "../../components/form/validation/MaxLengthRule.js"
import MinLengthRule from "../../components/form/validation/MinLengthRule.js"


export default function CreateVendorForm() {
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


    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully!", formState);
        } else {
            console.error("Validation errors:");
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${css.form_container} row`}>
            <Input
                label="Name"
                id="name"
                name="name"
                type="text"
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
                label="Description"
                id="description"
                name="description"
                type="text"
                placeholder="Enter Vendor's description"
                value={formState.description.value}
                onChange={(e) => handleChange("description", e.target.value)}
                onBlur={() => validateField("description")}
                validationState={{
                    error: formState.description.error,
                    wasValidating: formState.description.wasValidating
                }}
            />
            <div className={"col"}>
                <button className={`${css.btn} ${css.btn_primary}`} type="submit"> Create </button>
            </div>
        </form>
    );
}