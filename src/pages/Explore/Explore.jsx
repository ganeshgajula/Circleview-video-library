import React from "react";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import "./Explore.css";
import { Link } from "react-router-dom";

export const Explore = () => {
  const { data } = useVideos();

  return (
    <>
      <Navbar />
      <main className="videos-section">
        {data.videos.map(
          ({ videoId, name, channelName, level, language, thumbnail }) => (
            <Link
              to={`/watch/${videoId}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <div className="videos-thumbnail-wrapper" key={videoId}>
                <img
                  src={thumbnail}
                  alt="video-thumbnail"
                  className="thumbnail-image"
                />
                <p className="video-name">{name}</p>
                <p className="channel-name">{channelName}</p>
                <div className="more-info">
                  <span className="level">{level}</span>
                  <span className="language">{language}</span>
                </div>
              </div>
            </Link>
          )
        )}
      </main>
    </>
  );
};
