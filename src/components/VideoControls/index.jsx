import React from 'react';

import './styles.css';

export default function VideoControls() {
  return (
    <div className="video-controls">
        <div className="video-progress">
            <div className="current-progress"> </div>
        </div>
        <div className="controls">
            Controls
        </div>
    </div>
  );
}
