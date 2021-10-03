import React from "react";
import { Navbar } from "../../components";
import { useVideos } from "../../context";
import { HorizontalVideoCard } from "../../components";
import "./WatchLater.css";
import { getPlaylistByName } from "../../utils";

export const WatchLater = () => {
  const {
    data: { playlist },
  } = useVideos();

  const watchLaterPlaylist = getPlaylistByName(playlist, "Watch later");

  return (
    <>
      <Navbar />
      <h1 className="video-playlist-title">Watch later</h1>
      <div className="selected-playlist-videos">
        {watchLaterPlaylist?.videos?.length === 0 ? (
          <h3 className="empty-playlist-message">
            No videos added to watch later
          </h3>
        ) : (
          watchLaterPlaylist?.videos?.map((video) => (
            <HorizontalVideoCard
              key={video._id}
              playlistId={watchLaterPlaylist._id}
              {...video}
            />
          ))
        )}
      </div>
    </>
  );
};
