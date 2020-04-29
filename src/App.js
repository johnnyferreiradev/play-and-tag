import React from 'react';

import SearchVideo from './components/SearchVideo';

import './general-styles.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Play<span>&#38;</span>Tag</h2>
      </header>
      <main>
        <SearchVideo />
      </main>
      <footer>
        Desenvolvido por Johnny Ferreira
      </footer>
    </div>
  );
}

export default App;