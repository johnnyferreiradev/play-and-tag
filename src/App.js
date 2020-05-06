import React, { useState } from 'react';

import SearchVideo from './components/SearchVideo';
import VideoPlayer from './components/VideoPlayer';
import VideoControls from './components/VideoControls';

import './general-styles.css';
import './App.css';

function App() {
  const [player, setPlayer] = useState({});

  return (
    <div className="App">
      <header>
        <h2>Play<span>&#38;</span>Tag</h2>
      </header>
      <main>
        <SearchVideo />
        <VideoPlayer player={player} setPlayer={setPlayer} />
      </main>
      <VideoControls />
    </div>
  );
}

export default App;
