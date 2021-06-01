import { v4 as uuidv4 } from "uuid";
import { isVideoPresent } from "../utils";

export const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_VIDEO":
      return { ...state, searchedKeyword: payload };

    case "ADD_TO_LIKED_VIDEOS":
      return { ...state, likedVideos: [...state.likedVideos, payload] };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [...state.watchLaterVideos, payload],
      };

    case "ADD_TO_HISTORY":
      return { ...state, history: [...state.history, payload] };

    case "CREATE_NEW_PLAYLIST":
      return {
        ...state,
        playlist: [
          ...state.playlist,
          {
            id: uuidv4(),
            name: payload,
            videos: [],
          },
        ],
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlist) =>
          playlist.id === payload.ongoingPlaylistId
            ? {
                ...playlist,
                videos: [...playlist.videos, payload.requestedVideo],
              }
            : playlist
        ),
      };

    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlist: state.playlist.map((playlist) =>
          playlist.id === payload.ongoingPlaylistId
            ? {
                ...playlist,
                videos: playlist.videos.filter(
                  (video) => video.id !== payload.requestedVideo.id
                ),
              }
            : playlist
        ),
      };

    default:
      return state;
  }
};
