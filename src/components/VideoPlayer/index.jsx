import React from "react";
import { Player } from "video-react";
import "./styles.css";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "../../../node_modules/video-react/dist/video-react.css";

export default function VideoPlayer() {
  function handleComment() {
    console.log("ok");
  }

  return (
    <div className="video-player">
      <ContextMenuTrigger id="some_unique_identifier" className="context-menu">
        <div className="testes">
          <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ></Player>
        </div>
      </ContextMenuTrigger>

      <ContextMenu id="some_unique_identifier">
        <MenuItem
          className="context-menu-item"
          data={{ foo: "bar" }}
          onClick={handleComment}
        >
          Adicionar comentário
        </MenuItem>
      </ContextMenu>
    </div>
  );
}