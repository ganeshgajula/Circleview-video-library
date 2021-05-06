import { createContext, useContext } from "react";
import { videos } from "../data";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const initialState = {
    videos,
    likedVideos: [],
    watchLaterVideos: [],
    Playlist: [],
  };

  return (
    <VideosContext.Provider value={{ data: initialState }}>
      {children}
    </VideosContext.Provider>
  );
};

export const useVideos = () => useContext(VideosContext);
