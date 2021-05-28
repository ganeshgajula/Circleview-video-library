import React from "react";
import { CheckSvg } from "../ReusableSvgs";
import "./VideoCard.css";

export const VideoCard = ({
  name,
  channelName,
  level,
  language,
  thumbnail,
  channelLogo,
}) => {
  return (
    <div className="videos-thumbnail-wrapper">
      <img src={thumbnail} alt="video-thumbnail" className="thumbnail-image" />
      <div className="videoInfo-container">
        <img src={channelLogo} alt="channel-logo" className="channel-image" />
        <div className="videoDetails-section">
          <p className="video-name">{name}</p>
          <div className="channel-details">
            <span className="channel-name">{channelName}</span>
            <CheckSvg />
          </div>
          <div className="more-info">
            <span className="level">{level}</span> •
            <span className="language">{language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
