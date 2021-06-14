import React, { useEffect } from "react";
import { useVideos } from "./context";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Liked,
  WatchLater,
  Playlist,
  VideoPage,
  History,
  SelectedPlaylist,
  Login,
} from "./pages";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";

const App = () => {
  const { videosDispatch } = useVideos();

  useEffect(
    () => {
      (async () => {
        try {
          const {
            data: { videos },
          } = await axios.get("https://api-circleview.herokuapp.com/videos");
          videosDispatch({ type: "LOAD_VIDEOS", payload: videos });
        } catch (error) {
          console.error(error);
        }
      })();
    }, //eslint-disable-next-line
    []
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watch/:videoId" element={<VideoPage />} />
        <PrivateRoute path="/likedvideos" element={<Liked />} />
        <PrivateRoute path="/watchlater" element={<WatchLater />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
        <PrivateRoute
          path="/playlist/:playlistId"
          element={<SelectedPlaylist />}
        />
        <PrivateRoute path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
