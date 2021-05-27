import React from "react";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { Link } from "react-router-dom";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import "./Explore.css";

export const Explore = () => {
  const {
    data: { videos, searchedKeyword },
  } = useVideos();

  const filterBySearch = (videosBeforeFilter) =>
    videosBeforeFilter.filter((video) =>
      video.name.toLowerCase().includes(searchedKeyword.toLowerCase())
    );

  const filteredData = filterBySearch(videos);

  return (
    <>
      <Navbar />
      <main className="videos-section">
        {filteredData.map((video) => (
          <Link
            to={`/watch/${video.videoId}`}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <VideoCard {...video} />
          </Link>
        ))}
      </main>
    </>
  );
};
