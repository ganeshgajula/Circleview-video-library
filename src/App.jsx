import React from "react";
import "./App.css";
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

function App() {
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
}

export default App;
