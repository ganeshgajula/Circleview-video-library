import React, { useState } from "react";
import axios from "axios";
import { useAuth, useVideos } from "../../context";
import { isVideoPresent } from "../../utils";
import { AddSvg, CloseSvg } from "../ReusableSvgs";
import { addVideoToPlaylist, removeVideoFromPlaylist } from "../../utils";
import "./PlaylistModal.css";
import { toast } from "react-toastify";

export const PlaylistModal = ({ setShowPlaylistModal, requestedVideo }) => {
  const {
    data: { playlist },
    videosDispatch,
  } = useVideos();

  const { userId } = useAuth();

  const [newPlaylist, setNewPlaylist] = useState("");

  const toggleVideoInPlaylist = (ongoingPlaylist, requestedVideo) => {
    !isVideoPresent(ongoingPlaylist.videos, requestedVideo._id)
      ? // videosDispatch({
        //     type: "ADD_TO_PLAYLIST",
        //     payload: { ongoingPlaylistId: ongoingPlaylist._id, requestedVideo },
        //   })
        addVideoToPlaylist(
          ongoingPlaylist._id,
          userId,
          videosDispatch,
          requestedVideo._id
        )
      : removeVideoFromPlaylist(
          ongoingPlaylist._id,
          requestedVideo._id,
          userId,
          videosDispatch
        );

    // : videosDispatch({
    //     type: "REMOVE_FROM_PLAYLIST",
    //     payload: {
    //       ongoingPlaylistId: ongoingPlaylist._id,
    //       videoId: requestedVideo._id,
    //     },
    //   });
  };

  const createNewPlaylistHandler = async (e) => {
    e.preventDefault();

    try {
      const {
        data: {
          playlist: { playlists },
        },
        status,
      } = await axios.post(
        `http://localhost:4000/playlists/${userId}/playlist`,
        {
          name: newPlaylist,
          videoId: requestedVideo._id,
        }
      );

      if (status === 201) {
        videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
      }
      setNewPlaylist("");
    } catch (error) {
      toast.error(error?.response?.data.errorMessage, {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
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
          {playlist.map((ongoingPlaylist) => {
            console.log(ongoingPlaylist);
            return (
              <li key={ongoingPlaylist._id}>
                <label className="playlist-name">
                  <input
                    type="checkbox"
                    checked={isVideoPresent(
                      ongoingPlaylist.videos,
                      requestedVideo._id
                    )}
                    onChange={() =>
                      toggleVideoInPlaylist(ongoingPlaylist, requestedVideo)
                    }
                  />
                  {ongoingPlaylist.name}
                </label>
              </li>
            );
          })}
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
