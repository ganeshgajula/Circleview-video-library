import React from "react";
import { CheckSvg } from "../ReusableSvgs";
import "./HorizontalVideoCard.css";

export const HorizontalVideoCard = ({
  name,
  channelName,
  thumbnail,
  description,
  channelLogo,
}) => {
  return (
    <>
      <div className="horizontal-video-card">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="selected-video-thumbnail"
        />
        <div className="video-details-vertical">
          <h2 className="card-video-title">{name}</h2>
          <div className="card-channel-details">
            <img
              src={channelLogo}
              alt="creator"
              className="channel-logo-playlist-card"
            />
            <span className="creator-name">{channelName}</span>
            <CheckSvg />
          </div>
          <p className="video-info">{description}</p>
        </div>
      </div>
    </>
  );
};
