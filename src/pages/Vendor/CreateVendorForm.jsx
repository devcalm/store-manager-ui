import Input from "../../components/form/Input.jsx";
import { useFormValidation } from "../../hooks/useFormValidation.jsx";
import css from "../../components/form/styles.module.scss";


export default function CreateVendorForm() {
    const initialState = {
        name: "",
        description: ""
    };

    const {
        formState,
        errors,
        validationState,
        handleChange,
        validateField,
        validateForm,
    } = useFormValidation(initialState);

    const validationRules = {
        name: [
            { type: "required" },
            { type: "minLength", value: 2 },
            { type: "maxLength", value: 250 }
        ],
        description: [
            { type: "required" },
            { type: "minLength", value: 2 }
        ]
    };


    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm(validationRules)) {
            console.log("Form submitted successfully!", formState);
        } else {
            console.error("Validation errors:", errors);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${css.form_container} row`}>
            <Input
                label="Name"
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                validationState={validationState}
                onBlur={() =>
                    validateField("name", formState.name, validationRules.name)
                }
                placeholder="Enter Vendor's name"
            />
            <Input
                label="Description"
                id="description"
                name="description"
                type="text"
                value={formState.description}
                onChange={handleChange}
                validationState={validationState}
                onBlur={() =>
                    validateField("description", formState.description, validationRules.description)
                }
                placeholder="Enter Vendor's description"
            />
            <div className={"col"}>
                <button className={`${css.btn} ${css.btn_primary}`} type="submit"> Create </button>
            </div>
        </form>
    );
}