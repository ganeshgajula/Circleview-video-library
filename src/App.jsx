import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Explore, Liked, WatchLater, Playlist } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/likedvideos" element={<Liked />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
