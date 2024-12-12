import { useState } from "react";

export const useFormSubmit = (onSubmit) => {
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        setSending(true);

        try {
            await onSubmit(formData);
        } catch (error) {
            console.error("An error occurred during submission:", error);
        } finally {
            setSending(false)
        }
    };

    return {
        handleSubmit,
        sending
    };
};