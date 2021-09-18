import axios from "axios";
import { toast } from "react-toastify";

export const isVideoPresent = (array, id) =>
  array?.find((video) => video?._id === id);

export const getPlaylistByName = (playlist, searchPlaylistName) =>
  playlist.find((playlist) => playlist.name === searchPlaylistName);

export const addVideoToPlaylist = async (
  _id,
  userId,
  videosDispatch,
  videoId
) => {
  try {
    const {
      data: {
        playlist: { playlists },
      },
      status,
    } = await axios.post(
      `https://api-circleview.herokuapp.com/playlists/${userId}/playlist`,
      {
        _id,
        videoId,
      }
    );

    if (status === 201) {
      console.log("from add video", playlists);
      videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
      toast.success("Added video to playlist.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const removeVideoFromPlaylist = async (
  playlistId,
  _id,
  userId,
  videosDispatch
) => {
  try {
    const {
      data: {
        playlist: { playlists },
      },
      status,
    } = await axios.delete(
      `https://api-circleview.herokuapp.com/playlists/${userId}/playlist/videos`,
      { data: { playlistId: playlistId, videoId: _id } }
    );

    if (status === 200) {
      videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
      toast.success("Removed video from playlist.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const updatePlaylistName = async (
  playlistId,
  playlistName,
  userId,
  videosDispatch
) => {
  try {
    const {
      data: {
        playlist: { playlists },
      },
      status,
    } = await axios.post(
      `https://api-circleview.herokuapp.com/playlists/${userId}/playlist`,
      {
        _id: playlistId,
        name: playlistName,
      }
    );

    if (status === 201) {
      videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
      toast.success("Updated playlist name.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const deletePlaylist = async (playlistId, userId, videosDispatch) => {
  try {
    const {
      data: {
        playlist: { playlists },
      },
      status,
    } = await axios.delete(
      `https://api-circleview.herokuapp.com/playlists/${userId}/playlist`,
      {
        data: { _id: playlistId },
      }
    );

    if (status === 200) {
      videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
      toast.success("Deleted playlist successfully.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const addVideoToWatchHistory = async (
  videoId,
  userId,
  videosDispatch
) => {
  try {
    const {
      data: {
        history: { videos },
      },
      status,
    } = await axios.post(
      `https://api-circleview.herokuapp.com/history/${userId}/videos`,
      {
        videoId,
      }
    );

    if (status === 201) {
      videosDispatch({ type: "LOAD_HISTORY", payload: videos });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const removeVideoFromWatchHistory = async (
  videoId,
  userId,
  videosDispatch
) => {
  try {
    const {
      data: {
        history: { videos },
      },
      status,
    } = await axios.delete(
      `https://api-circleview.herokuapp.com/history/${userId}/videos`,
      {
        data: { videoId },
      }
    );

    if (status === 200) {
      videosDispatch({ type: "LOAD_HISTORY", payload: videos });
      toast.success("Removed video from watch history.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const clearWatchHistory = async (userId, videosDispatch) => {
  try {
    const {
      data: {
        history: { videos },
      },
      status,
    } = await axios.delete(
      `https://api-circleview.herokuapp.com/history/${userId}`
    );

    if (status === 200) {
      videosDispatch({ type: "LOAD_HISTORY", payload: videos });
      toast.success("Watch history cleared successfully.", {
        position: "bottom-center",
        autoClose: 2500,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};

export const updateUserProfile = async (
  userId,
  firstName,
  lastName,
  setUsername,
  setLastname
) => {
  try {
    const {
      status,
      data: {
        updatedUserInfo: { firstname, lastname },
      },
    } = await axios.post(
      `https://api-circleview.herokuapp.com/users/${userId}`,
      {
        firstname: firstName,
        lastname: lastName,
      }
    );

    if (status === 200) {
      toast.success("User profile updated successfully", {
        position: "bottom-center",
        autoClose: 2000,
      });
      setUsername(firstname);
      setLastname(lastname);
    }
  } catch (error) {
    toast.error(error?.response?.data.errorMessage, {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};
