import React, { useState } from 'react';
import EmojiDisplay from './EmojiDisplay';
import GuessInput from './GuessInput';
import Modal from './Modal';
import '../styles/App.css';

function App() {
  const emojiData = [
    {"emoji": "❤️✉️", "text": "Love Letter"},
    {"emoji": "⌚🐶", "text": "Watch Dog"},
    {"emoji": "🕷️🚹", "text": "Spider Man"},
    {"emoji": "🔙🔲1️⃣", "text": "Back To Square One"},
    {"emoji": "📼🐛", "text": "Tape Worm"},
    {"emoji": "🔍🐟", "text": "Finding Nemo"},
    {"emoji": "🌍🏆", "text": "World Cup"},
    {"emoji": "🤲2️⃣2️⃣", "text": "Catch 22"},
    {"emoji": "🅱️🔜🔙", "text": "Be Right Back"},
    {"emoji": "🦁👑", "text": "Lion King"},
    {"emoji": "⛰️🌄", "text": "Mountain Dew"},
    {"emoji": "⭐💵", "text": "Starbucks"},
    {"emoji": "👻🏠", "text": "Haunted House"},
    {"emoji": "🐱🎩", "text": "Cat In The Hat"},
    {"emoji": "😡🚹", "text": "Mad Men"},
    {"emoji": "1️⃣🌙🔵", "text": "Once In A Blue Moon"},
    {"emoji": "❄️🍵", "text": "Iced Tea"},
    {"emoji": "🤫🐑", "text": "Silence Of The Lambs"},
    {"emoji": "☕🛑", "text": "Coffee Break"},
    {"emoji": "🧈🖐️", "text": "Butter Fingers"},
    {"emoji": "🦁😴🌙", "text": "The Lion Sleeps Tonight"},
    {"emoji": "😈👗👜", "text": "The Devil Wears Prada"},
    {"emoji": "🌧️🐱🐶", "text": "Raining Cats And Dogs"},
    {"emoji": "👋👦", "text": "Bison"},
    {"emoji": "🔟👁️🌊", "text": "Tennessee"},
    {"emoji": "🍏📅👨‍⚕️🚫", "text": "An Apple A Day Keeps The Doctor Away"},
    {"emoji": "😡⛽🚗", "text": "Madagascar"},
    {"emoji": "👽📞🏠", "text": "ET Phone Home"},
    {"emoji": "🪑⬆️", "text": "Cheer Up"},
    {"emoji": "🏠🍭🍬🍫🏠", "text": "Home Sweet Home"},
    {"emoji": "🦶⚽️🏀🎮", "text": "Football Game"},
    {"emoji": "🍯🌖", "text": "Honeymoon"},
    {"emoji": "🏰🌃", "text": "Fortnite"},
    {"emoji": "🐀👨🏻‍🍳🍳🇫🇷", "text": "Ratatouille"},
    {"emoji": "👑🐝", "text": "Queen Bee"},
    {"emoji": "🍕🍕🍕🍕", "text": "Four Cheese Pizza"},
    {"emoji": "🐻🧸", "text": "Teddy Bear"},
    {"emoji": "🎨🖌️", "text": "Paintbrush"},
    {"emoji": "🚪🚶‍♀️", "text": "Doorstep"},
    {"emoji": "🎃👻🕸️🕷️", "text": "Halloween"},
    {"emoji": "🐈🦸‍♀️", "text": "Catwoman"},
    {"emoji": "🎭🎬🎥", "text": "Filmmaking"},
    {"emoji": "🔍🔦", "text": "Sherlock Holmes"},
    {"emoji": "🧩🤝", "text": "Pieces Together"},
    {"emoji": "🕰️🏅🕊️🐛", "text": "The Early Bird Catches The Worm"},
    {"emoji": "🏰❄️👩🏻‍❤️‍👩🏼⛄️", "text": "Frozen"},
    {"emoji": "👶🥶➡️", "text": "Baby It's Cold Outside"},
    {"emoji": "🌕👨🏻‍🦰➡️🐺", "text": "Werewolf"},
    {"emoji": "👸🏼😘🐸➡️🤴🏼", "text": "True Love Kiss"},
    {"emoji": "🗿⭐️", "text": "Rock Star"}
  ];

  const [guess, setGuess] = useState("");

  const getRandomEmoji = () => emojiData[Math.floor(Math.random() * emojiData.length)];
  
  const [selectedEmoji, setSelectedEmoji] = useState(getRandomEmoji);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  const handleSubmit = () => {
    const s = toTitleCase(guess);
    if (s === selectedEmoji.text) {
      setModalMessage("Correct Guess!");
    } else {
      setModalMessage(`Incorrect! The correct answer was "${selectedEmoji.text}".`);
    }
    setIsModalOpen(true);
  };

  const handleNext = () => {
    setSelectedEmoji(getRandomEmoji);
    setIsModalOpen(false); // Close the modal if open
    setGuess(""); // Clear the guess input
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmoji(getRandomEmoji());
    setGuess(""); // Clear the guess input when a new emoji is generated
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Emoji Riddles
        </p>
      </header>
      <div className="Game">
        <EmojiDisplay emoji={selectedEmoji.emoji} />
        <GuessInput value={guess} onChange={setGuess} onSubmit={handleSubmit} />
        <button 
        onClick={handleNext} 
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '1em',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          transition: '0.3s',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
      >
        Next
      </button>
        <Modal
          isOpen={isModalOpen}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}

export default App;
