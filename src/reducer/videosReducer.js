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

    default:
      return state;
  }
};
