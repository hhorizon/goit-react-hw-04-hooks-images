import { createPortal } from "react-dom";
import { useEffect } from "react";
import { VscClose } from "react-icons/vsc";
import { Overlay, ModalContent, ModalBtn } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

function Modal({ closeModal, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
      <ModalBtn onClick={closeModal}>
        <VscClose />
      </ModalBtn>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
