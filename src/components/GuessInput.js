import React, { useState } from 'react';

function GuessInput({ onSubmit }) {
  const [guess, setGuess] = useState("");

  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={() => onSubmit(guess)}>Submit</button>
    </div>
  );
}

export default GuessInput;

