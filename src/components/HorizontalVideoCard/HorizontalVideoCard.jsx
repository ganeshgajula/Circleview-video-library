import React from "react";
import { CheckSvg, DeleteSvg } from "../ReusableSvgs";
import { Link } from "react-router-dom";
import { useAuth, useVideos } from "../../context";
import { removeVideoFromPlaylist } from "../../utils";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({
  _id,
  name,
  channelName,
  thumbnail,
  description,
  channelLogo,
  playlistId,
}) => {
  const { userId } = useAuth();
  const { videosDispatch } = useVideos();
  return (
    <div key={_id} className="horizontal-video-card">
      <Link to={`/watch/${_id}`} className="video-details-area link-tag">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="selected-video-thumbnail"
        />
        <div className="video-details-vertical">
          <h2 className="card-video-title">{name}</h2>
          <div className="card-channel-details">
            <img
              src={channelLogo}
              alt="creator"
              className="channel-logo-playlist-card"
            />
            <span className="creator-name">{channelName}</span>
            <CheckSvg />
          </div>
          <p className="video-info">{description}</p>
        </div>
      </Link>
      <button
        onClick={() =>
          removeVideoFromPlaylist(playlistId, _id, userId, videosDispatch)
        }
        className="delete-btn"
      >
        <DeleteSvg />
      </button>
      <button
        onClick={() =>
          removeVideoFromPlaylist(playlistId, _id, userId, videosDispatch)
        }
        className="btn-sm remove-btn"
      >
        Remove
      </button>
    </div>
  );
};
