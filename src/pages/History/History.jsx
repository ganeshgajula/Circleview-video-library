import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useAuth, useVideos } from "../../context";
import { CheckSvg, DeleteSvg } from "../../components/ReusableSvgs";
import { clearWatchHistory, removeVideoFromWatchHistory } from "../../utils";
import "./History.css";

export const History = () => {
  const {
    data: { history },
    videosDispatch,
  } = useVideos();

  const { userId } = useAuth();

  return (
    <>
      <Navbar />
      <div className="playlist-heading-container">
        <h1 className="playlist-heading">Watch history</h1>
        {history.length > 0 && (
          <button
            className="clear-history-btn"
            onClick={() => clearWatchHistory(userId, videosDispatch)}
          >
            Clear Watch History
          </button>
        )}
      </div>
      <div className="selected-playlist-videos">
        {history.length === 0 ? (
          <h3 className="empty-playlist-message">
            You haven't watched any videos yet
          </h3>
        ) : (
          history.map((video) => (
            <div key={video._id} className="horizontal-video-card">
              <Link
                to={`/watch/${video._id}`}
                className="video-details-area link-tag"
              >
                <img
                  src={video.thumbnail}
                  alt="thumbnail"
                  className="selected-video-thumbnail"
                />
                <div className="video-details-vertical">
                  <h2 className="card-video-title">{video.name}</h2>
                  <div className="card-channel-details">
                    <img
                      src={video.channelLogo}
                      alt="creator"
                      className="channel-logo-playlist-card"
                    />
                    <span className="creator-name">{video.channelName}</span>
                    <CheckSvg />
                  </div>
                  <p className="video-info">{video.description}</p>
                </div>
              </Link>
              <button
                className="delete-btn"
                onClick={() =>
                  removeVideoFromWatchHistory(video._id, userId, videosDispatch)
                }
              >
                <DeleteSvg />
              </button>
              <button
                onClick={() =>
                  removeVideoFromWatchHistory(video._id, userId, videosDispatch)
                }
                className="btn-sm remove-btn"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};
