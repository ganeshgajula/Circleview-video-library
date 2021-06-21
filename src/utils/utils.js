import axios from "axios";

export const isVideoPresent = (array, id) =>
  !!array.find((video) => video?._id === id);

export const addVideoToPlaylist = async (
  _id,
  userId,
  videosDispatch,
  videoId
) => {
  const {
    data: {
      playlist: { playlists },
    },
    status,
  } = await axios.post(`http://localhost:4000/playlists/${userId}/playlist`, {
    _id,
    videoId,
  });

  if (status === 201) {
    videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
  }
};

export const removeVideoFromPlaylist = async (
  playlistId,
  _id,
  userId,
  videosDispatch
) => {
  const {
    data: {
      playlist: { playlists },
    },
    status,
  } = await axios.delete(
    `http://localhost:4000/playlists/${userId}/playlist/videos`,
    { data: { playlistId: playlistId, videoId: _id } }
  );

  if (status === 200) {
    videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
  }
};

export const updatePlaylistName = async (
  playlistId,
  playlistName,
  userId,
  videosDispatch
) => {
  const {
    data: {
      playlist: { playlists },
    },
    status,
  } = await axios.post(`http://localhost:4000/playlists/${userId}/playlist`, {
    _id: playlistId,
    name: playlistName,
  });

  if (status === 201) {
    videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
  }
};

export const deletePlaylist = async (playlistId, userId, videosDispatch) => {
  const {
    data: {
      playlist: { playlists },
    },
    status,
  } = await axios.delete(`http://localhost:4000/playlists/${userId}/playlist`, {
    data: { _id: playlistId },
  });

  if (status === 200) {
    videosDispatch({ type: "LOAD_PLAYLIST", payload: playlists });
  }
};

export const addVideoToWatchHistory = async (
  videoId,
  userId,
  videosDispatch
) => {
  const {
    data: {
      history: { videos },
    },
    status,
  } = await axios.post(`http://localhost:4000/history/${userId}/videos`, {
    videoId,
  });

  if (status === 201) {
    videosDispatch({ type: "LOAD_HISTORY", payload: videos });
  }
};

export const removeVideoFromWatchHistory = async (
  videoId,
  userId,
  videosDispatch
) => {
  const {
    data: {
      history: { videos },
    },
    status,
  } = await axios.delete(`http://localhost:4000/history/${userId}/videos`, {
    data: { videoId },
  });

  if (status === 200) {
    videosDispatch({ type: "LOAD_HISTORY", payload: videos });
  }
};

export const clearWatchHistory = async (userId, videosDispatch) => {
  const {
    data: {
      history: { videos },
    },
    status,
  } = await axios.delete(`http://localhost:4000/history/${userId}`);

  if (status === 200) {
    videosDispatch({ type: "LOAD_HISTORY", payload: videos });
  }
};
