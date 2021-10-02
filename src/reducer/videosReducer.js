export const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_VIDEOS":
      return { ...state, videos: payload };

    case "LOAD_PLAYLIST":
      return { ...state, playlist: payload };

    case "LOAD_HISTORY":
      return { ...state, history: payload };

    case "SEARCH_VIDEO":
      return { ...state, searchedKeyword: payload };

    default:
      return state;
  }
};
