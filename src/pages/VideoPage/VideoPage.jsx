import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import "./VideoPage.css";

export const VideoPage = () => {
  const { videoID } = useParams();

  const {
    data: { videos },
  } = useVideos();

  const requestedVideo = videos.find((video) => video.videoId === videoID);

  return (
    <>
      <Navbar />
      <div className="video-container">
        <ReactPlayer
          url={`https://youtube.com/embed/${requestedVideo.videoId}`}
          controls
          width={`1080px`}
          height={`540px`}
        />
      </div>
    </>
  );
};
