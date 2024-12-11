import ValidationRule from "./ValidationRule";

export default class MaxLengthRule extends ValidationRule {

    validate(value) {
        if (value.length <= this.options.value) {
            return ""
        }
        return this.options.message
            || `Must be no more ${rule.value} characters.`;
    }
}