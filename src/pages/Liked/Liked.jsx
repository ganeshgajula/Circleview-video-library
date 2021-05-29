import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { PlaylistVideoCard } from "../../components/PlaylistVideoCard";
import "./Liked.css";

export const Liked = () => {
  const {
    data: { likedVideos },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="heading">Liked Videos</h1>
      <div className="playlist-videos-wrapper">
        {likedVideos.map((video) => (
          <Link
            key={video.name}
            to={`/watch/${video.videoId}`}
            style={{ textDecoration: "none", color: "#000" }}
          >
            <PlaylistVideoCard {...video} />
          </Link>
        ))}
      </div>
    </>
  );
};
