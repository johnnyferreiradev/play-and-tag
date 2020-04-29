import React from 'react';

import './styles.css';

export default function VideoPlayer() {
  return (
    <div className="video-player">
        <div className="video-area">
            <video width="1080px" controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                teste
            </video>
        </div>
    </div>
  );
}
