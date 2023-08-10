import React from 'react';

function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div>
      <div>{message}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;

