import React from "react";
import "./VideoCard.css";

export const VideoCard = ({
  videoId,
  name,
  channelName,
  level,
  language,
  thumbnail,
}) => {
  return (
    <div className="videos-thumbnail-wrapper" key={videoId}>
      <img src={thumbnail} alt="video-thumbnail" className="thumbnail-image" />
      <p className="video-name">{name}</p>
      <p className="channel-name">{channelName}</p>
      <div className="more-info">
        <span className="level">{level}</span>
        <span className="language">{language}</span>
      </div>
    </div>
  );
};
