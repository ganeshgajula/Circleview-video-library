export const isVideoPresent = (array, id) =>
  !!array.find((video) => video.id === id);
