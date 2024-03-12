import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="w-full fixed top-0 bottom-0 left-0 right-0">
      {children}
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
