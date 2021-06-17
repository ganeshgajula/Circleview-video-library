import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./WatchLater.css";

export const WatchLater = () => {
  const {
    data: { playlist },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="video-playlist-title">Watch later</h1>
      <div className="selected-playlist-videos">
        {playlist.map(
          (playlist) =>
            playlist.name === "Watch later" &&
            playlist.videos.map((video) => (
              <Link
                key={video._id}
                to={`/watch/${video._id}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <HorizontalVideoCard key={video._id} {...video} />
              </Link>
            ))
        )}
      </div>
    </>
  );
};
