import React, { useState } from 'react';
import EmojiDisplay from './EmojiDisplay';
import GuessInput from './GuessInput';
import Modal from './Modal';
import '../styles/App.css';

function App() {
  const emojiData = [
    { emoji: "😀", text: "grinning" },
    { emoji: "😃", text: "smiley" },
    { emoji: "😄", text: "happy" },
    // ... You can add more emojis and their corresponding text values here
  ];

  const randomEmoji = emojiData[Math.floor(Math.random() * emojiData.length)];

  const [selectedEmoji] = useState(randomEmoji);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (guess) => {
    if (guess === selectedEmoji.text) {
      setModalMessage("Correct Guess!");
    } else {
      setModalMessage(`Incorrect! The correct answer was "${selectedEmoji.text}".`);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Emoji Guessing Game
        </p>
      </header>
      <div className="Game">
        <EmojiDisplay emoji={selectedEmoji.emoji} />
        <GuessInput onSubmit={handleSubmit} />
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;
