import React from "react";
import { NavbarWithoutSearch, PlaylistVideos } from "../../components";
import { useVideos } from "../../context";
import "./Playlist.css";

export const Playlist = () => {
  const {
    data: { playlist },
  } = useVideos();
  return (
    <>
      <NavbarWithoutSearch />
      <div className="playlists-container">
        {playlist.map((playlist) => (
          <PlaylistVideos key={playlist._id} {...playlist} />
        ))}
      </div>
    </>
  );
};
