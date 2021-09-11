import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    pesan: "relax, you're doing well",
    name: "bahagia"
  },
  {
    emoji: '🎉',
    pesan: "get some gifts!",
    name: "pesta"
  },
  {
    emoji: '💃',
    pesan: "time to refresh",
    name: "joget"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Selamat Datang</h1>
      {displayAction && <p>Tugas</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.pesan} id={emoji.pesan}>{emoji.emoji} <p>{emoji.name}</p></span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;