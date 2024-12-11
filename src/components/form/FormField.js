export default class FormField {

    constructor(initialValue = "", rules = []) {
        this.value = initialValue;
        this.rules = rules;
        this.error = "";
        this.wasValidating = false;
    }

    validate(formState) {
        for (const rule of this.rules) {
            const error = rule.validate(this.value, formState);
            if (error) {
                this.error = error;
                this.wasValidating = true;
                return error;
            }
        }
        this.error = "";
        this.wasValidating = true;
        return "";
    }

    updateValue(newValue) {
        this.value = newValue;
        this.error = "";
    }
}