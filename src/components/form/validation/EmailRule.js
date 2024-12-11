import ValidationRule from "./ValidationRule";

export default class EmailRule extends ValidationRule {

    validate(value) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (value && !emailPattern.test(value)) {
            return this.options.message || "Invalid email address.";
        }
        return "";
    }
}