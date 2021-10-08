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

    case "OPEN_SIDE_DRAWER":
      return { ...state, showSideDrawer: true };

    case "CLOSE_SIDE_DRAWER":
      return { ...state, showSideDrawer: false };

    default:
      return state;
  }
};
