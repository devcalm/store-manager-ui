const validationRules = new Map([
    [
        "required",
        (value, _, message) => {
            if (!value) return message || "This field is required.";
            return null;
        },
    ],
    [
        "email",
        (value, _, message) => {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (value && !emailPattern.test(value)) return message || "Invalid email address.";
            return null;
        },
    ],
    [
        "minLength",
        (value, rule, message) => {
            if (value.length < rule.value) return message || `Must be at least ${rule.value} characters.`;
            return null;
        },
    ],
    [
        "maxLength",
        (value, rule, message) => {
            if (value.length > rule.value) return message || `Must be no more ${rule.value} characters.`;
            return null;
        },
    ],
    [
        "match",
        (value, rule, message) => {
            if (value !== rule.compareWith) return message || "Fields do not match.";
            return null;
        },
    ],
]);

export const validate = (value, rules) => {
    for (const rule of rules) {
        const validator = validationRules.get(rule.type);
        if (validator) {
            const error = validator(value, rule, rule.message);
            if (error) return error;
        }
    }
    return "";
};
