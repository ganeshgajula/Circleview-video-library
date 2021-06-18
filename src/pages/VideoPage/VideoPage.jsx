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
} from "../../components/ReusableSvgs";
import { useVideos } from "../../context";
import { isVideoPresent } from "../../utils/utils";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoId } = useParams();

  const {
    data: { videos, likedVideos, playlist, history },
    videosDispatch,
  } = useVideos();

  const { isUserLoggedIn } = useAuth();

  const requestedVideo = videos.find((video) => video._id === videoId);

  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const getPlaylistByName = (playlist, searchPlaylistName) =>
    playlist.find((playlist) => playlist.name === searchPlaylistName);

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
            isUserLoggedIn && !isVideoPresent(history, requestedVideo._id)
              ? videosDispatch({
                  type: "ADD_TO_HISTORY",
                  payload: requestedVideo,
                })
              : null
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
                isUserLoggedIn
                  ? !isVideoPresent(likedVideos, requestedVideo._id)
                    ? videosDispatch({
                        type: "ADD_TO_LIKED_VIDEOS",
                        payload: requestedVideo,
                      })
                    : videosDispatch({
                        type: "REMOVE_FROM_LIKED_VIDEOS",
                        payload: requestedVideo._id,
                      })
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(likedVideos, requestedVideo._id) ? (
                <HeartOutlinedSvg />
              ) : (
                <HeartSvg />
              )}
            </button>
            <button
              className="video-action-btn"
              onClick={() =>
                isUserLoggedIn
                  ? !isVideoPresent(
                      getPlaylistByName(playlist, "Watch later").videos,
                      requestedVideo._id
                    )
                    ? videosDispatch({
                        type: "ADD_TO_WATCH_LATER_PLAYLIST",
                        payload: {
                          playlistName: "Watch later",
                          requestedVideo,
                        },
                      })
                    : videosDispatch({
                        type: "REMOVE_FROM_WATCH_LATER_PLAYLIST",
                        payload: {
                          playlistName: "Watch later",
                          videoId: requestedVideo._id,
                        },
                      })
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(
                getPlaylistByName(playlist, "Watch later").videos,
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
                isUserLoggedIn
                  ? !isVideoPresent(
                      getPlaylistByName(playlist, "Saved videos").videos,
                      requestedVideo._id
                    )
                    ? videosDispatch({
                        type: "ADD_TO_SAVED_VIDEOS_PLAYLIST",
                        payload: {
                          playlistName: "Saved videos",
                          requestedVideo,
                        },
                      })
                    : videosDispatch({
                        type: "REMOVE_FROM_SAVED_VIDEOS_PLAYLIST",
                        payload: {
                          playlistName: "Saved videos",
                          videoId: requestedVideo._id,
                        },
                      })
                  : setShowLoginModal(true)
              }
            >
              {!isVideoPresent(
                getPlaylistByName(playlist, "Saved videos").videos,
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
                isUserLoggedIn
                  ? setShowPlaylistModal((prev) => !prev)
                  : setShowLoginModal(true);
              }}
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
        {showLoginModal && (
          <LoginPromptModal setShowLoginModal={setShowLoginModal} />
        )}

        <h1 className="video-title">{requestedVideo.name}</h1>
        <p className="video-description">{requestedVideo.description}</p>
      </div>
    </>
  );
};
