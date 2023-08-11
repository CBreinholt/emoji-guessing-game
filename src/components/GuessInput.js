import React from 'react';

function GuessInput({ value, onChange, onSubmit }) {

  const inputStyle = {
    padding: '10px',
    fontSize: '1em',
    width: '80%',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: '0.3s',
  };

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  const handleButtonClick = () => {
    onSubmit();
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter your guess"
        style={inputStyle}
      />
      <button 
        onClick={handleButtonClick}
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
      >
        Submit
      </button>
    </div>
  );
}


export default GuessInput;

