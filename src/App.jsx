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
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/watch/:videoID" element={<VideoPage />} />
        <Route path="/likedvideos" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
