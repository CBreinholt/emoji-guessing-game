import React from 'react';

function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '2em',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
    color: '#282c34',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: '0.3s',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div>{message}</div>
        <button 
          onClick={onClose}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
        >
          Close
        </button>
      </div>
    </div>
  );
}


export default Modal;

