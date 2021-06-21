import React, { createContext, useContext, useReducer } from "react";
import { videosReducer } from "../reducer";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const initialState = {
    videos: [],
    playlist: [],
    history: [],
    searchedKeyword: "",
  };

  const [state, dispatch] = useReducer(videosReducer, initialState);

  return (
    <VideosContext.Provider value={{ data: state, videosDispatch: dispatch }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
