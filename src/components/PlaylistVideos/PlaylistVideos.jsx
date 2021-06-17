import React from "react";
import { CheckSvg } from "../ReusableSvgs";
import { Link } from "react-router-dom";
import "./PlaylistVideos.css";

export const PlaylistVideos = ({ id, name, videos }) => {
  return (
    <div className="playlist-overview-container">
      <div className="playlist-details">
        <div className="playlist-info">
          <h2 className="name">{name}</h2>
          {videos.length !== 0 ? (
            <small className="videos-count">{videos.length} videos</small>
          ) : null}
        </div>
        {videos.length !== 0 ? (
          <Link to={`/playlist/${id}`}>
            <button className="more-videos badge-item default-bdg btn-sm">
              SEE ALL
            </button>
          </Link>
        ) : null}
      </div>

      {videos.length === 0 ? (
        <p className="empty-playlist-msg">
          You haven't added any videos to this playlist
        </p>
      ) : (
        <div className="playlist-videos-overview">
          {videos.slice(0, 5).map((video) => (
            <Link
              to={`/watch/${video._id}`}
              key={video._id}
              className="remove-default"
            >
              <div className="playlist-videos-container">
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="playlist-thumbnail-image"
                />
                <h3 className="video-name">{video.name}</h3>
                <div className="creator-channel-details">
                  <img
                    src={video.channelLogo}
                    alt="creator"
                    className="channel-logo-playlist-card"
                  />
                  <span className="creator-name">{video.channelName}</span>
                  <CheckSvg />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
