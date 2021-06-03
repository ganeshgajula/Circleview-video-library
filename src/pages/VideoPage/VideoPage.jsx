import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
import {
  BookmarkSvg,
  CheckSvg,
  WatchLaterSvg,
  HeartSvg,
  PlaylistPlusSvg,
} from "../../components/ReusableSvgs";
import { useVideos } from "../../context";
import { isVideoPresent } from "../../utils/utils";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoId } = useParams();

  const { data, videosDispatch } = useVideos();

  const requestedVideo = data.videos.find((video) => video.id === videoId);

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <ReactPlayer
          url={`https://youtube.com/embed/${requestedVideo.id}`}
          controls
          pip
          width="100%"
          height="100%"
          onStart={() =>
            videosDispatch({ type: "ADD_TO_HISTORY", payload: requestedVideo })
          }
        />
        <div className="video-details">
          <span className="channel-view">
            <img
              src={requestedVideo.channelLogo}
              alt="channelLogo"
              className="channel-image"
            />
            <span className="channel-info">
              <div className="video-channel-details">
                <h2 className="video-channel-name">
                  {requestedVideo.channelName}
                </h2>
                <CheckSvg />
              </div>
              <small className="subscribers-count">
                {requestedVideo.subscriberCount} subscribers
              </small>
            </span>
          </span>

          <span className="video-action-btns">
            <button
              className="video-action-btn"
              onClick={() =>
                !isVideoPresent(data.likedVideos, requestedVideo.id)
                  ? videosDispatch({
                      type: "ADD_TO_LIKED_VIDEOS",
                      payload: requestedVideo,
                    })
                  : null
              }
            >
              <HeartSvg />
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                !isVideoPresent(data.watchLaterVideos, requestedVideo.id)
                  ? videosDispatch({
                      type: "ADD_TO_WATCH_LATER",
                      payload: requestedVideo,
                    })
                  : null
              }
            >
              <WatchLaterSvg />
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                videosDispatch({
                  type: "ADD_TO_SAVED_VIDEOS",
                  payload: requestedVideo,
                })
              }
            >
              <BookmarkSvg />
            </button>
            <button
              className="video-action-btn"
              onClick={() => setShowPlaylistModal((prev) => !prev)}
            >
              <PlaylistPlusSvg />
            </button>
          </span>
        </div>
        {showPlaylistModal && (
          <PlaylistModal
            setShowPlaylistModal={setShowPlaylistModal}
            requestedVideo={requestedVideo}
          />
        )}
        <h1 className="video-title">{requestedVideo.name}</h1>
        <p className="video-description">{requestedVideo.description}</p>
      </div>
    </>
  );
};
