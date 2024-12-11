import ValidationRule from "./ValidationRule";

export default class MinLengthRule extends ValidationRule {

    validate(value) {
        if (value.length >= this.options.value) {
            return ""
        }
        return this.options.message
            || `Must be at least ${this.options.value} characters`;
    }
}