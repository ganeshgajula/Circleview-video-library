import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { PlaylistVideoCard } from "../../components/PlaylistVideoCard";
import "./WatchLater.css";

export const WatchLater = () => {
  const {
    data: { watchLaterVideos },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="heading">Watch later</h1>
      <div className="playlist-videos-wrapper">
        {watchLaterVideos.map((video) => (
          <Link
            key={video.name}
            to={`/watch/${video.id}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <PlaylistVideoCard {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};
