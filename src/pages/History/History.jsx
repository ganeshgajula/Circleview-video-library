import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useVideos } from "../../context";
import { PlaylistVideoCard } from "../../components/PlaylistVideoCard";

export const History = () => {
  const {
    data: { history },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="heading">History</h1>
      <div className="playlist-videos-wrapper">
        {history.map((video) => (
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
