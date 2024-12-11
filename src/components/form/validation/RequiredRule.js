import ValidationRule from "./ValidationRule";

export default class RequiredRule extends ValidationRule {

    validate(value) {
        return value ? "" : this.options.message || "This field is required";
    }
}

