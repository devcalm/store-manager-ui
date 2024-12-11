import ValidationRule from "./ValidationRule";

export default class MatchRule extends ValidationRule {

    validate(value, formState) {
        if (value === formState[this.options.compareWith]) {
            return "";
        }
        return this.options.message
            || "Values do not match";
    }
}