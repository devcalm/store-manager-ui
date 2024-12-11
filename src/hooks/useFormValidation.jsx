import { useState } from "react";
import { validate } from "../utils/validation.js";

export const useFormValidation = (initialState) => {
    const [formState, setFormState] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [validationState, setValidationState] = useState({});

    const validateField = (name, value, rules) => {
        const error = validate(value, rules);
        setErrors(prev => ({ ...prev, [name]: error }));
        setValidationState((prev) => ({
            ...prev,
            [name]: {wasValidating: true, error }
        }));
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setValidationState((prev) => ({
            ...prev,
            [name]: { ...prev[name], error: "", wasValidating: prev[name]?.wasValidating || false },
          }));
    };

    const validateForm = (validationRules) => {
        const newErrors = {};
        const newValidationState = {};
        let isValid = true;

        for (const [field, rules] of Object.entries(validationRules)) {
            const error = validate(formState[field], rules);
            newErrors[field] = error;
            newValidationState[field] = { wasValidating: true, error };
            if (error) {
                isValid = false;
            }
           
        }

        setErrors(newErrors);
        setValidationState(newValidationState);
        return isValid;
    };

    return {
        formState,
        errors,
        handleChange,
        validateField,
        validateForm,
        validationState
    };
};