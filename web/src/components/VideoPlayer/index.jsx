import React, { useState, useEffect } from "react";
import { Player } from "video-react";
import Popup from "reactjs-popup";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Comment from "../Comment";

import format from "../../utils/timeFormater";

import { FaCommentAlt } from "react-icons/fa";
import "./styles.css";
import "../../../node_modules/video-react/dist/video-react.css";

export default function VideoPlayer({
  url,
  player,
  setPlayer,
}) {
  const [comment, setComment] = useState("");
  const [duration, setDuration] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentTime, setCommentTime] = useState("");

  const fakeData = [
    {
      time: 10,
      content: "blablablabla",
    },
    {
      time: 40,
      content: "blablablablabla",
    },
    {
      time: 45,
      content: "blablablablabla",
    },
  ];
  function handleComment(time, comment) {
    const newComment = {
      time,
      comment,
    };
    fakeData.push(newComment);
    setComment("");
  }

  function handleCommentTime() {
    const currentTime = player.getState().player.currentTime;
    setCommentTime(currentTime);
  }
  function handleDuration() {
    const videoDuration = player.getState().player.duration;
    setDuration(videoDuration);
  }
  useEffect(() => {
    setComments(fakeData);
  }, []);

  useEffect(() => {
    if (player.props) {
      const videoReactPoster = document.querySelector(".video-react-poster");
      videoReactPoster.addEventListener("click", handleDuration);
    }
  }, [player]);

  return (
    <div className="video-player">
      <ContextMenuTrigger id="some_unique_identifier" className="context-menu">
        <div className="video-container">
          <Player
            ref={(player) => {
              setPlayer(player);
            }}
            playsInline
            poster="/assets/poster.png"
            src={url}
          ></Player>
          <div className="comments">
            {comments.map((comment) => (
              <Comment
                key={comment.time}
                time={comment.time}
                comment={comment.content}
                totalTime={duration}
              />
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
                onClick={handleCommentTime}
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
            <div className="header">
              {" "}
              Adicionar comentário a {format(commentTime)}{" "}
            </div>

            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button
              className="button"
              onClick={() => {
                handleComment(commentTime, comment);
                close();
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
