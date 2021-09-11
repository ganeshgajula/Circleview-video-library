import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth, useVideos } from "./context";
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
  Signup,
  Login,
} from "./pages";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";

const App = () => {
  const { videosDispatch } = useVideos();
  const { userId, token } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { videos },
        } = await axios.get("http://localhost:4000/videos");
        videosDispatch({ type: "LOAD_VIDEOS", payload: videos });
      } catch (error) {
        toast.error(error?.response?.data.errorMessage, {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
    })();
  }, [videosDispatch]);

  useEffect(() => {
    token &&
      (async () => {
        try {
          const {
            data: {
              playlist: { playlists },
            },
          } = await axios.get(
            `http://localhost:4000/playlists/${userId}/playlist`
          );

          videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });

          const {
            data: {
              history: { videos },
            },
          } = await axios.get(`http://localhost:4000/history/${userId}/videos`);

          videosDispatch({ type: "LOAD_HISTORY", payload: videos });
        } catch (error) {
          toast.error(error?.response?.data.errorMessage, {
            position: "bottom-center",
            autoClose: 3000,
          });
        }
      })();
  }, [token, userId, videosDispatch]);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </div>
  );
};

export default App;
