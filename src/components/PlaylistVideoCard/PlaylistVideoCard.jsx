import React from "react";
import { CheckSvg } from "../ReusableSvgs";
import "./PlaylistVideoCard.css";

export const PlaylistVideoCard = ({ name, channelName, thumbnail }) => {
  return (
    <div key={name} className="playlist-video-container">
      <img src={thumbnail} alt="thumbnail" className="thumbnail-image" />
      <div className="videoDetails-section">
        <h2 className="video-name">{name}</h2>
        <div className="channel-details">
          <span className="channel-name">{channelName}</span>
          <CheckSvg />
        </div>
      </div>
    </div>
  );
};
