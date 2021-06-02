import React from "react";
import { Navbar, PlaylistVideos } from "../../components";
import { useVideos } from "../../context";
import "./Playlist.css";

export const Playlist = () => {
  const {
    data: { playlist },
  } = useVideos();
  return (
    <>
      <Navbar />
      <div className="playlists-container">
        {playlist.map((playlist) => (
          <PlaylistVideos key={playlist.id} {...playlist} />
        ))}
      </div>
    </>
  );
};
