import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./Liked.css";

export const Liked = () => {
  const {
    data: { likedVideos },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="video-playlist-title">Liked videos</h1>
      <div className="selected-playlist-videos">
        {likedVideos.length === 0 ? (
          <h3 className="empty-playlist-message">
            You haven't liked any videos yet
          </h3>
        ) : (
          likedVideos.map((video) => (
            <Link
              key={video.name}
              to={`/watch/${video.id}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <HorizontalVideoCard key={video.id} {...video} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};
