import { useState } from "react";
import  FormField  from "../components/form/FormField.js";

export const useFormValidation = (fieldsConfig) => {
    const [formState, setFormState] = useState(
        Object.keys(fieldsConfig).reduce((acc, key) => {
            acc[key] = new FormField(fieldsConfig[key].initialValue, fieldsConfig[key].rules);
            return acc;
        }, {})
    );

    const validateForm = () => {
        let isValid = true;
        const updatedFormState = { ...formState };

        Object.keys(updatedFormState).forEach((key) => {
            const field = updatedFormState[key];
            const error = field.validate(
                Object.fromEntries(
                    Object.entries(updatedFormState).map(([k, v]) => [k, v.value])
                )
            );
            if (error) isValid = false;
        });

        setFormState(updatedFormState);
        return isValid;
    };

    const validateField = (name) => {
        const updatedFormState = { ...formState };
        const field = updatedFormState[name];

        field.validate(
            Object.fromEntries(
                Object.entries(updatedFormState).map(([k, v]) => [k, v.value])
            )
        );

        setFormState(updatedFormState);
    };

    const handleChange = (name, value) => {
        const updatedFormState = { ...formState };
        updatedFormState[name].updateValue(value);
        setFormState(updatedFormState);
    };

    return {
        formState,
        validateForm,
        validateField,
        handleChange
    };
};