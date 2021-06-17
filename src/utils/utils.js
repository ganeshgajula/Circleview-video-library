export const isVideoPresent = (array, id) =>
  !!array.find((video) => video._id === id);
