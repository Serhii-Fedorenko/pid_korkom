import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/modal/slice";

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackDropClick}
    >
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md sm:max-w-lg">
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
