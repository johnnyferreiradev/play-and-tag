import React from 'react';

import './styles.css';

export default function SearchVideo() {
  return (
    <div className="search">
        <input type="text" placeholder="Insira a URL do seu video. Ex: https://video.mp4" />
        <div className="button">
            <button type="button">Buscar</button>
        </div>
    </div>
  );
}
