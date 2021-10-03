import React from "react";
import { NavbarWithoutSearch } from "../../components";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./Liked.css";
import { getPlaylistByName } from "../../utils";

export const Liked = () => {
  const {
    data: { playlist },
  } = useVideos();

  const likedVideosPlaylist = getPlaylistByName(playlist, "Liked videos");

  return (
    <>
      <NavbarWithoutSearch />
      <h1 className="video-playlist-title">Liked videos</h1>
      <div className="selected-playlist-videos">
        {likedVideosPlaylist?.videos?.length === 0 ? (
          <h3 className="empty-playlist-message">
            You haven't liked any videos yet
          </h3>
        ) : (
          likedVideosPlaylist?.videos?.map((video) => (
            <HorizontalVideoCard
              key={video._id}
              playlistId={likedVideosPlaylist._id}
              {...video}
            />
          ))
        )}
      </div>
    </>
  );
};
