import React from "react";
import "./Modal.css";

const Modal = ({ show, onClose, src }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={src}
          title="NIU Login/Signup"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        ></iframe>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Modal;
