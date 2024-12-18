import { createContext, useContext, useState, useCallback } from "react";
import Modal from "../components/ui/modals/Modal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
    const [modalContent, setModalContent] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = useCallback((content) => {
        setModalContent(content);
        setModalIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setModalIsOpen(false);
        setModalContent(null);
    }, []);

    return (
        <ModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Modal open={modalIsOpen} onClose={closeModal}>
                {modalContent}
            </Modal>
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
