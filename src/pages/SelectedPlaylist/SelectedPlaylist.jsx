import React, { useState } from "react";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HorizontalVideoCard } from "../../components";
import {
  CheckMarkedSvg,
  DeleteOutlineSvg,
  PencilSvg,
} from "../../components/ReusableSvgs";
import "./SelectedPlaylist.css";

export const SelectedPlaylist = () => {
  const {
    data: { playlist },
    videosDispatch,
  } = useVideos();
  const { playlistId } = useParams();
  const navigate = useNavigate();

  const userSelectedPlaylist = playlist.find(
    (myplaylist) => myplaylist.id === playlistId
  );

  const [playlistName, setPlaylistName] = useState(userSelectedPlaylist?.name);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <Navbar />
      <div className="selected-playlist-videos">
        <div className="selected-playlist-actions">
          {isEditMode ? (
            <div>
              <input
                type="text"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
              />

              <div className="user-playlist-action-btns">
                <button
                  className="btn-sm btn-primary"
                  onClick={() => {
                    videosDispatch({
                      type: "UPDATE_PLAYLIST_NAME",
                      payload: {
                        playlistId: userSelectedPlaylist.id,
                        playlistName,
                      },
                    });
                    setIsEditMode(false);
                  }}
                >
                  Save
                </button>
                <button
                  className="btn-sm btn-outline"
                  onClick={() => {
                    // setPlaylistName(userSelectedPlaylist.name);
                    setIsEditMode(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <h2 className="selected-playlist-title">
              {userSelectedPlaylist.name}
            </h2>
          )}
          <span className="playlist-action-btns">
            <button
              className="playlist-action-btn"
              onClick={() => setIsEditMode((prev) => !prev)}
            >
              {isEditMode ? (
                <CheckMarkedSvg
                  playlistId={userSelectedPlaylist.id}
                  playlistName={playlistName}
                />
              ) : (
                <PencilSvg />
              )}
            </button>
            <button
              className="playlist-action-btn"
              onClick={() => {
                videosDispatch({
                  type: "DELETE_PLAYLIST",
                  payload: userSelectedPlaylist.id,
                });
                navigate("/playlist");
              }}
            >
              <DeleteOutlineSvg />
            </button>
          </span>
        </div>
        {userSelectedPlaylist.videos.map((video) => (
          <Link
            to={`/watch/${video.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <HorizontalVideoCard key={video.id} {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};
