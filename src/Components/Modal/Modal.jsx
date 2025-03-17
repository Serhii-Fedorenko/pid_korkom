import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal/slice";
import css from './Modal.module.css'

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        dispatch(toggleModal());
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch]);

  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleModal());
    }
  };

  return createPortal(
    <div className={css.Modal__backdrop} onClick={handleBackDropClick}>
      <div className={css.Modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
