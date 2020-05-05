import React from "react";
import { Player } from "video-react";
import { FaCommentAlt } from "react-icons/fa";
import Popup from "reactjs-popup";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import "./styles.css";
import "../../../node_modules/video-react/dist/video-react.css";

export default function VideoPlayer() {
  function handleComment() {
    /*
    const { player } = player.getState();
    console.log(player.currentTime); // print current time
    */
  }

  const fakeData = [
    {
      time: 10,
      comment: "blablablabla",
    },
    {
      time: 40,
      comment: "blablablablabla",
    },
    {
      time: 45,
      comment: "blablablablabla",
    },
  ];

  return (
    <div className="video-player">
      <ContextMenuTrigger id="some_unique_identifier" className="context-menu">
        <div className="video-container">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ></Player>
          <div className="comments">
            {fakeData.map((comment) => (
              <div className="comment">
                <Popup
                  trigger={
                    <button className="icon-button">
                      <FaCommentAlt size={18} color="#8250F7" />
                    </button>
                  }
                  position="top center"
                  closeOnDocumentClick
                >
                  <span className="comment-content">{comment.comment}</span>
                </Popup>
              </div>
            ))}
          </div>
        </div>
      </ContextMenuTrigger>

      <Popup
        trigger={
          <button className="gambiarra">
            <ContextMenu id="some_unique_identifier">
              <MenuItem
                className="context-menu-item"
                data={{ foo: "bar" }}
                onClick={handleComment}
              >
                Adicionar comentário
              </MenuItem>
            </ContextMenu>
          </button>
        }
        modal
        closeOnDocumentClick
      >
        {(close) => (
          <div className="modal">
            <a className="close" onClick={close}>
              &times;
            </a>
            <div className="header"> Adicionar comentário a XX:XX </div>

            <textarea />

            <button
              className="button"
              onClick={() => {
                console.log("foi");
              }}
            >
              comentar
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}
