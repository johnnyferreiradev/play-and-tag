import React from "react";
import Popup from "reactjs-popup";

import { FaCommentAlt } from "react-icons/fa";
import "./styles.css";

export default function Comment({ comment, time, totalTime }) {
  const position = `${(time*100)/totalTime}%`;
  return (
    <div
      className="comment"
      style={{
        color: "blue",
        left: position,
      }}
    >
      <Popup
        trigger={
          <button className="icon-button">
            <FaCommentAlt size={18} color="#8250F7" />
          </button>
        }
        position="top center"
        closeOnDocumentClick
      >
        <span className="comment-content">
          <div className="comment-time">
            {time} seconds
          </div>
          {comment}
        </span>
      </Popup>
    </div>
  );
}
