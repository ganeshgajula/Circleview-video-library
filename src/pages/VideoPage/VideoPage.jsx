import React from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";

export const VideoPage = () => {
  const { videoID } = useParams();

  const { data } = useVideos();

  const requestedVideo = data.videos.find((video) => video.videoId === videoID);

  console.log(requestedVideo);

  return (
    <>
      <Navbar />
      <div style={{ marginTop: "8rem" }}>
        <ReactPlayer
          url={`https://youtube.com/embed/${requestedVideo.videoId}`}
        />
      </div>
    </>
  );
};
