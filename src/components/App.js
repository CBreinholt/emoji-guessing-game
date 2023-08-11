import React, { useState } from 'react';
import EmojiDisplay from './EmojiDisplay';
import GuessInput from './GuessInput';
import Modal from './Modal';
import '../styles/App.css';

function App() {
  const emojiData = [
    {"emoji": "💕 ✉️", "text": "Love Letter"},
    {"emoji": "⌚ 🐶", "text": "Watch Dog"},
    {"emoji": "🕷️ 🚹", "text": "Spider Man"},
    {"emoji": "🔙 ⚁ 🟦 ⚀", "text": "Back To Square One"},
    {"emoji": "📼 🐛", "text": "Tape Worm"},
    {"emoji": "🔍 🐟", "text": "Finding Nemo"},
    {"emoji": "🌍 🏆", "text": "World Cup"},
    {"emoji": "🎣 ⚁ ⚁", "text": "Catch 22"},
    {"emoji": "🅱️ 🔜 🔙", "text": "Be Right Back"},
    {"emoji": "🦁 👑", "text": "Lion King"},
    {"emoji": "⛰️ 💧,", "text": "Mountain Dew"},
    {"emoji": "🌟 💵", "text": "Star Bucks"},
    {"emoji": "👻 🏠", "text": "Haunted House"},
    {"emoji": "🐱 🎩", "text": "Cat In The Hat"},
    {"emoji": "😡 🚹", "text": "Mad Men"},
    {"emoji": "🔂 🌙 🔵", "text": "Once In A Blue Moon"},
    {"emoji": "❄️ 🍵", "text": "Iced Tea"},
    {"emoji": "🤫 🐑", "text": "Silence Of the Lambs"},
    {"emoji": "☕ 🛑", "text": "Coffee Break"},
    {"emoji": "🧈 🖐️", "text": "Butter Fingers"},
    {"emoji": "🦁 😴 🌙", "text": "The Lion Sleeps Tonight"},
    {"emoji": "😈 👗 👜", "text": "The Devil Wears Prada"},
    {"emoji": "🌧️🐱 🐶", "text": "Raining Cats And Dogs"},
    {"emoji": "👋 👦", "text": "Bison"},
    {"emoji": "🔟 👁️ 🌊", "text": "Tennessee"},
    {"emoji": "🍏 📅 👨‍⚕️🚫", "text": "An Apple A Day Keeps The Doctor Away"},
    {"emoji": "😡 ⛽ 🚗", "text": "Madagascar"},
    {"emoji": "👽 📞 🏠", "text": "ET Phone Home"}
  ];

  const randomEmoji = emojiData[Math.floor(Math.random() * emojiData.length)];

  const [selectedEmoji] = useState(randomEmoji);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  const handleSubmit = (guess) => {
    const s = toTitleCase(guess)
    if (s === selectedEmoji.text) {
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
