export const videosReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_VIDEO":
      return { ...state, searchedKeyword: payload };

    default:
      return state;
  }
};
