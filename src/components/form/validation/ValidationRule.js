export default class ValidationRule {

    constructor(options = {}) {
        this.options = options;
    }

    validate(value, formState = {}) {
        throw new Error("Validate method must be implemented by subclasses");
    }
}