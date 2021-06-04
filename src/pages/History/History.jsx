import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./History.css";

export const History = () => {
  const {
    data: { history },
  } = useVideos();

  return (
    <>
      <Navbar />
      <h1 className="video-playlist-title">Watch history</h1>
      <div className="selected-playlist-videos">
        {history.length === 0 ? (
          <h3 className="empty-playlist-message">
            You haven't watched any videos yet
          </h3>
        ) : (
          history.map((video) => (
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
