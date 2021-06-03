import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./WatchLater.css";

export const WatchLater = () => {
  const {
    data: { watchLaterVideos },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="video-playlist-title">Watch later</h1>
      <div className="selected-playlist-videos">
        {watchLaterVideos.map((video) => (
          <Link
            key={video.name}
            to={`/watch/${video.id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <HorizontalVideoCard key={video.id} {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};
