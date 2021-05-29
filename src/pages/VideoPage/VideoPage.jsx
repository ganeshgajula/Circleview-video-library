import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import {
  BookmarkSvg,
  CheckSvg,
  WatchLaterSvg,
  HeartSvg,
  PlaylistPlusSvg,
} from "../../components/ReusableSvgs";
import { useVideos } from "../../context";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoID } = useParams();

  const { data, videosDispatch } = useVideos();

  const requestedVideo = data.videos.find((video) => video.videoId === videoID);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <ReactPlayer
          url={`https://youtube.com/embed/${requestedVideo.videoId}`}
          controls
          width="100%"
          height="100%"
        />
        <div className="video-details">
          <span className="channel-view">
            <img
              src={requestedVideo.channelLogo}
              alt="channelLogo"
              className="channel-image"
            />
            <span className="channel-info">
              <div className="channel-details">
                <h2 className="channel-name">{requestedVideo.channelName}</h2>
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
                videosDispatch({
                  type: "ADD_TO_LIKED_VIDEOS",
                  payload: requestedVideo,
                })
              }
            >
              <HeartSvg />
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                videosDispatch({
                  type: "ADD_TO_WATCH_LATER",
                  payload: requestedVideo,
                })
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
            <button className="video-action-btn">
              <PlaylistPlusSvg />
            </button>
          </span>
        </div>
        <h1 className="video-title">{requestedVideo.name}</h1>
        <p className="video-description">{requestedVideo.description}</p>
      </div>
    </>
  );
};
