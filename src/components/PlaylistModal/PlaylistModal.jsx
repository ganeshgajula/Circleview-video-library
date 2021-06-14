import React, { useState } from "react";
import { useVideos } from "../../context";
import { isVideoPresent } from "../../utils";
import { AddSvg, CloseSvg } from "../ReusableSvgs";
import "./PlaylistModal.css";

export const PlaylistModal = ({ setShowPlaylistModal, requestedVideo }) => {
  const {
    data: { playlist },
    videosDispatch,
  } = useVideos();

  const [newPlaylist, setNewPlaylist] = useState("");

  const toggleVideoInPlaylist = (ongoingPlaylist, requestedVideo) => {
    !isVideoPresent(ongoingPlaylist.videos, requestedVideo.id)
      ? videosDispatch({
          type: "ADD_TO_PLAYLIST",
          payload: { ongoingPlaylistId: ongoingPlaylist.id, requestedVideo },
        })
      : videosDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: { ongoingPlaylistId: ongoingPlaylist.id, requestedVideo },
        });
  };

  const createNewPlaylistHandler = (e) => {
    e.preventDefault();
    videosDispatch({
      type: "CREATE_NEW_PLAYLIST",
      payload: newPlaylist,
    });
    setNewPlaylist("");
  };

  console.log(playlist);
  return (
    <div className="outer-modal">
      <div className="inner-modal">
        <div className="modal-heading">
          <span className="playlist-modal-title">Save to</span>
          <button
            className="close-btn"
            onClick={() => setShowPlaylistModal(false)}
          >
            <CloseSvg />
          </button>
        </div>
        <ul className="playlist-container">
          {playlist.map((ongoingPlaylist) => (
            <li key={ongoingPlaylist.id}>
              <label className="playlist-name">
                <input
                  type="checkbox"
                  checked={isVideoPresent(
                    ongoingPlaylist.videos,
                    requestedVideo.id
                  )}
                  onChange={() =>
                    toggleVideoInPlaylist(ongoingPlaylist, requestedVideo)
                  }
                />
                {ongoingPlaylist.name}
              </label>
            </li>
          ))}
        </ul>

        <hr />
        <form onSubmit={createNewPlaylistHandler} className="playlist-form">
          <input
            type="text"
            className="new-playlist-field"
            placeholder="Create new playlist"
            value={newPlaylist}
            onChange={(e) => setNewPlaylist(e.target.value)}
          />
          <button type="submit" disabled={!newPlaylist} className="close-btn">
            <AddSvg />
          </button>
        </form>
      </div>
    </div>
  );
};
