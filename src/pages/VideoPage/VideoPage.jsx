import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context";
import { Navbar } from "../../components";
import { PlaylistModal, LoginPromptModal } from "../../components";
import {
  BookmarkSvg,
  BookmarkOutlinedSvg,
  CheckSvg,
  WatchLaterOutlinedSvg,
  WatchLaterSvg,
  HeartOutlinedSvg,
  HeartSvg,
  PlaylistPlusSvg,
  ShareSvg,
} from "../../components/ReusableSvgs";
import { useVideos } from "../../context";
import {
  isVideoPresent,
  getPlaylistByName,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  addVideoToWatchHistory,
} from "../../utils";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoId } = useParams();

  const {
    data: { videos, playlist, history },
    videosDispatch,
  } = useVideos();

  const { token, userId } = useAuth();

  const requestedVideo = videos.find((video) => video._id === videoId);

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const watchLaterPlaylist = getPlaylistByName(playlist, "Watch later");

  const savedVideosPlaylist = getPlaylistByName(playlist, "Saved videos");

  const likedVideosPlaylist = getPlaylistByName(playlist, "Liked videos");

  return (
    <>
      <Navbar />
      <div className="video-container">
        <ReactPlayer
          url={`https://youtube.com/embed/${requestedVideo.videoId}`}
          controls
          pip
          width="100%"
          height="100%"
          onStart={() =>
            token &&
            !isVideoPresent(history, requestedVideo._id) &&
            addVideoToWatchHistory(requestedVideo._id, userId, videosDispatch)
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
                token
                  ? !isVideoPresent(
                      likedVideosPlaylist?.videos,
                      requestedVideo._id
                    )
                    ? addVideoToPlaylist(
                        likedVideosPlaylist?._id,
                        userId,
                        videosDispatch,
                        requestedVideo._id
                      )
                    : removeVideoFromPlaylist(
                        likedVideosPlaylist?._id,
                        requestedVideo._id,
                        userId,
                        videosDispatch
                      )
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(
                likedVideosPlaylist?.videos,
                requestedVideo._id
              ) ? (
                <HeartOutlinedSvg />
              ) : (
                <HeartSvg />
              )}
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                token
                  ? !isVideoPresent(
                      watchLaterPlaylist?.videos,
                      requestedVideo._id
                    )
                    ? addVideoToPlaylist(
                        watchLaterPlaylist?._id,
                        userId,
                        videosDispatch,
                        requestedVideo._id
                      )
                    : removeVideoFromPlaylist(
                        watchLaterPlaylist?._id,
                        requestedVideo._id,
                        userId,
                        videosDispatch
                      )
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(
                watchLaterPlaylist?.videos,
                requestedVideo._id
              ) ? (
                <WatchLaterOutlinedSvg />
              ) : (
                <WatchLaterSvg />
              )}
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                token
                  ? !isVideoPresent(
                      savedVideosPlaylist?.videos,
                      requestedVideo._id
                    )
                    ? addVideoToPlaylist(
                        savedVideosPlaylist?._id,
                        userId,
                        videosDispatch,
                        requestedVideo._id
                      )
                    : removeVideoFromPlaylist(
                        savedVideosPlaylist?._id,
                        requestedVideo._id,
                        userId,
                        videosDispatch
                      )
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(
                savedVideosPlaylist?.videos,
                requestedVideo._id
              ) ? (
                <BookmarkOutlinedSvg />
              ) : (
                <BookmarkSvg />
              )}
            </button>
            <button
              className="video-action-btn"
              onClick={() => {
                token
                  ? setShowPlaylistModal((prev) => !prev)
                  : setShowLoginModal(true);
              }}
            >
              <PlaylistPlusSvg />
            </button>
            <button className="video-action-btn">
              <ShareSvg />
            </button>
          </span>
        </div>
        {showPlaylistModal && (
          <PlaylistModal
            setShowPlaylistModal={setShowPlaylistModal}
            requestedVideo={requestedVideo}
          />
        )}
        {showLoginModal && (
          <LoginPromptModal setShowLoginModal={setShowLoginModal} />
        )}

        <h1 className="video-title">{requestedVideo.name}</h1>
        <p className="video-description">{requestedVideo.description}</p>
      </div>
    </>
  );
};
